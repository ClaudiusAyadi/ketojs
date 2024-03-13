import { h, hString, hFragment } from 'https://unpkg.com/ketojs@1.0.0';
import Todo from './TodoClass.js';

function App(state) {
	return hFragment([h('h1', { class: 'title' }, ['My TODO']), CreateTodo(state), TodoList(state)]);
}

function CreateTodo(state) {
	const addTodo = e => {
		e.preventDefault();
		const form = document.querySelector('form');
		const todo = form.todo.value;
		state.todo.create(todo);
		form.reset();

	return h('form', { onsubmit: addTodo }, [
		h('input', { type: 'text', name: 'todo', placeholder: 'What needs to be done?' }),
		h('button', { type: 'submit' }, ['Add'])
	]);
}


  return hFragment([
    h('h1', { class: 'title' }, ['My todo']),
    h('form', { on: { submit: addTodo } }, [
      h('input', { type: 'text', name: 'todo', placeholder: 'What needs to be done?' }),
      h('button', { type: 'submit' }, ['Add'])
    ]);
  ])
}

function TodoList({ state }) {
	return h(
		'ul',
		{},
		state.todos.map((todo, i) => TodoItem(todo, i, state.editingIdx))
	);
}

function TodoItem(todo, idxInList, editingIdxs) {
	const isEditing = editingIdxs.has(idxInList);
	return h('li', {}, [
		isEditing ? EditingMode(todo, idxInList, editingIdxs) : ReadMode(todo, idxInList, editingIdxs)
	]);
}

function ReadMode(todo, idxInList, editingIdx) {
	const startEdit = () => editingIdx.add(idxInList);

	const deleteTodo = () => {
		todo.remove(idxInList);
		editingIdx.delete(idxInList);
	};

	return hFragment(
		h('input', { type: 'checkbox', name: 'completed', value: todo }),
		h('p', { key: idxInList }, [todo]),
		h('button', { on: { click: editTodo } }, ['penSVG']),
		h('button', { on: { click: deleteTodo } }, ['binSVG'])
	);
}

function EditMode(todo, idxInList, editingIdxs) {
	const saveEdit = newTodo => {
		todo.edit(idxInList, newTodo);
		editingIdxs.delete(idxInList);
	};

	const cancelEdit = () => editingIdxs.delete(idxInList);

	return h('form', { on: { submit: saveTodo } }, [
		h('input', { type: 'text', name: 'todo', value: todo }),
		h('button', { type: 'submit' }, ['Save'])
	]);
}

console.log(App);

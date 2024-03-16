import { createApp, h, hS, hF } from 'https://unpkg.com/ketojs@1';

// function Counter() {
// 	const count = 0;

// 	const add = count => count++;
// 	const sub = count => count--;

// 	return (
// 		<>
// 			{' '}
// 			// HTML representation of hFragment
// 			<h1 class="title">Counter MVC</h1> // HTML representation of h
// 			<button type="button" onclick={() => sub(count)}>
// 				- // HTML representation of hString
// 			</button>{' '}
// 			// HTML representation of h
// 			<button type="button" onclick={() => add(count)}>
// 				+ // HTML representation of hString
// 			</button>{' '}
// 			// HTML representation of h
// 		</>
// 	);
// }

// TODO:  find a way to pass Counter to a createApp intance, e.g. the app instance can be named keto instead of createApp.
// so we have:
// Keto(Counter()).mount(document.querySelector('#app'))

const state = { count: 0 };
const reducers = {
	add: state => ({ count: state.count + 1 }),
	sub: state => ({ count: state.count - 1 })
};
const View = (state, emit) => {
	return hF([
		h('h1', { class: 'title' }, ['Counter MVC']),
		h('button', { on: { click: () => emit('sub') }, type: 'button' }, ['-']),
		h('span', { class: `${state.count < 0 ? 'negative' : 'positive'}` }, [hS(state.count)]),
		h('button', { on: { click: () => emit('add') }, type: 'button' }, ['+'])
	]);
};

createApp({ state, view: View, reducers }).mount(document.querySelector('#app'));

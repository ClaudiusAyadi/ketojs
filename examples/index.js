import { h } from 'https://unpkg.com/ketojs@1.0.0/dist/keto.js';

// h('form', { class: 'login-form', action: 'login' }, [
// 	h('input', { type: 'text', name: 'user' }),
// 	h('input', { type: 'password', name: 'pass' }),
// 	h('button', { on: { click: login } }, ['Login'])
// ]);

// h('h1', { class: 'title' }, ['My counter']);
// h('div', { class: 'container' }, [
// 	h('button', { on: { click: decrement } }, ['decrement']),
// 	h('span', ['0']),
// 	h('button', { on: { click: increment } }, ['increment'])
// ]);

function lipsum(num) {
	// takes a num
	// returns a fragment with num paragraphs of lorem ipsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.".

	return h(
		'fragment',
		Array.from({ length: num }, () =>
			h('p', {}, [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
			])
		)
	);
}

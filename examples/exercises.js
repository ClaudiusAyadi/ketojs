import { h, hString, hFragment } from 'https://unpkg.com/ketojs@1.0.0';

hFragment([
	h('h1', { class: 'title' }, ['My counter']),
	h('div', { class: 'container' }, [
		h('button', {}, ['decrement']),
		h('span', {}, ['0']),
		h('button', {}, ['increment'])
	])
]);

function lipsum(num) {
	const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

	return Array(num).fill(h('p', {}, [text]));
}

console.log(lipsum(5));

function MessageComponent({ level, message }) {
	const levels = ['info', 'warning', 'error'];
	if (!levels.includes(level)) {
		throw new Error(`Invalid level provided: ${level}. Level must be one of: ${levels.join(', ')}`);
	}
	return h('div', { class: `message message--${level}` }, [h('p', [message])]);
}

console.log(MessageComponent({ level: 'info', message: 'Hello, world!' }));

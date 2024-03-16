import { filterEmpty } from './utils/arrays';

export const DOM_TYPES = {
	TEXT: 'text',
	ELEMENT: 'element',
	FRAGMENT: 'fragment'
};

export function h(tag, props = {}, children = []) {
	return {
		tag,
		props,
		children: mapTextNodes(filterEmpty(children)),
		type: DOM_TYPES.ELEMENT
	};
}

function mapTextNodes(children) {
	return children.map(child => (typeof child === 'string' ? hS(child) : child));
}

export function hS(str) {
	return {
		value: str,
		type: DOM_TYPES.TEXT
	};
}

export function hF(vNodes) {
	return {
		children: mapTextNodes(filterEmpty(vNodes)),
		type: DOM_TYPES.FRAGMENT
	};
}

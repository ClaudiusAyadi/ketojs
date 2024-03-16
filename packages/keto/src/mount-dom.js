import { DOM_TYPES } from './h';
import { addEventListeners } from './events';
import { setAttributes } from './attributes';

export function mountDOM(vDOM, parentEl) {
	const { type } = vDOM;
	switch (type) {
		case DOM_TYPES.TEXT:
			createTextNode(vDOM, parentEl);
			break;

		case DOM_TYPES.ELEMENT:
			createElementNode(vDOM, parentEl);
			break;

		case DOM_TYPES.FRAGMENT:
			createFragmentNodes(vDOM, parentEl);
			break;

		default:
			throw new Error(`Can't mount DOM of type: ${type}`);
	}
}

function createTextNode(vDOM, parentEl) {
	const { value } = vDOM;
	const textNode = document.createTextNode(value);
	vDOM.el = textNode;
	parentEl.append(textNode);
}

function createFragmentNodes(vDOM, parentEl) {
	const { children } = vDOM;
	vDOM.el = parentEl;
	children.forEach(child => mountDOM(child, parentEl));
}

function createElementNode(vDOM, parentEl) {
	const { tag, props, children } = vDOM;
	const element = document.createElement(tag);
	addProps(element, props, vDOM);
	vDOM.el = element;
	children.forEach(child => mountDOM(child, element));
	parentEl.append(element);
}

function addProps(el, props, vDOM) {
	const { on: events, ...attrs } = props;
	vDOM.listeners = addEventListeners(events, el);
	setAttributes(el, attrs);
}

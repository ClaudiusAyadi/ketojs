import { destroyDOM } from './destroy-dom';
import { Dispatcher } from './dispatcher';
import { mountDOM } from './mount-dom';

export function createApp({ state, view, reducers = {} }) {
	let parentEl = null;
	let vDOM = null;

	const dispatcher = new Dispatcher();
	const subscriptions = [dispatcher.afterEveryCommand(renderApp)];

	function emit(eventName, payload) {
		dispatcher.dispatch(eventName, payload);
	}

	for (const actionName in reducers) {
		const reducer = reducers[actionName];

		const subs = dispatcher.subscribe(actionName, payload => {
			state = reducer(state, payload);
		});
		subscriptions.push(subs);
	}

	function renderApp() {
		if (vDOM) {
			destroyDOM(vDOM);
		}

		vDOM = view(state, emit);
		mountDOM(vDOM, parentEl);
	}

	return {
		mount(_parentEl) {
			parentEl = _parentEl;
			renderApp();
		},

		unmount() {
			destroyDOM(vDOM);
			vDOM = null;
			subscriptions.forEach(unsubscribe => unsubscribe());
		}
	};
}

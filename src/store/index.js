import { createStore } from "redux";

const initialData = {
	counter: 0,
	showCounter: true,
};

const counterReducer = (state = initialData, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { counter: state.counter + 1, showCounter: state.showCounter };
		case "INCREASE":
			return {
				counter: state.counter + action.amount,
				showCounter: state.showCounter,
			};
		case "DECREMENT":
			return { counter: state.counter - 1, showCounter: state.showCounter };
		case "TOGGLE":
			return { counter: state.counter, showCounter: !state.showCounter };
		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;

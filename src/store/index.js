import { createStore } from "redux";

const initialData = {
	counter: 0,
};

const counterReducer = (state = initialData, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { counter: state.counter + 1 };
		case "INCREASE":
			return { counter: state.counter + action.amount };
		case "DECREMENT":
			return { counter: state.counter - 1 };
		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;

import { createStore } from "redux";

const initialData = {
	counter: 0,
};

const counterReducer = (state = initialData, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;

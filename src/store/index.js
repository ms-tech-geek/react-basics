import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialData = {
	counter: 0,
	showCounter: true,
};

createSlice({
	name: "counter",
	initialState: initialData,
	reducers: {
		methods: {
			increment(state) {
				state.counter++;
			},
			decrement(state) {
				state.counter--;
			},
			increase(state, action) {
				state.counter = state.counter + action.amount;
			},
			toggleCounter(state) {
				state.showCounter = !state.showCounter;
			},
		},
	},
});

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

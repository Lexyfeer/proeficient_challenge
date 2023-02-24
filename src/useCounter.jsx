import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action) {
        case "reset":
            return 0;
        case "increment":
            return state + 1;
        case "decrement":
            return state <= 0 ? 0 : state - 1;
        default:
            throw new Error();
    }
};

export default function useCounter(score) {
    return useReducer(reducer, score || 0);
}

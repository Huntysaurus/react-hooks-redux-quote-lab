import { v4 as uuid } from "uuid";
// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote
  };
};

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id
  };
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload]

    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);
  
    default:
      return state;
  }
}
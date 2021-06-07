import { combineReducers } from "redux";
import { booksReducer } from './books/booksReducer';
import { cartReducer } from "./cart/cartReducer";
import { filterReducer } from "./filters/filtersReducer";



export const rootReducer = combineReducers({
	books: booksReducer,
	filters: filterReducer,
	cart: cartReducer
})

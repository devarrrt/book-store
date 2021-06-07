import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { BooksState } from './books/booksReducer';
import { FiltersState } from './filters/filtersReducer';
// import { cartState } from './cart/cartReducer';




declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,
	composeEnhancers(applyMiddleware(thunk))
)

export interface RootState {
	books: BooksState,
	filters: FiltersState,
	// cart: cartState
}


export default store
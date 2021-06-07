import { IBook } from "../../pages/Home"
import { BooksAction, BooksActionsType } from "./booksAction"



const initialState: BooksState = {
	books: [],
	isLoaded: false
}

export interface BooksState {
	books: IBook[],
	isLoaded: boolean
}



export const booksReducer = ( state = initialState, action: BooksAction ) => {
	switch (action.type) {

		case BooksActionsType.SET_BOOKS:
			return {
				...state,
				books: action.payload,
				isLoaded: true
			}

		case BooksActionsType.SET_LOADING:
			return {
				...state,
				isLoaded: action.payload
			}

		default: return state
	}
}


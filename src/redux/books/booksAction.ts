
import axios from 'axios';
import { Action } from 'redux';
import { IBook } from './../../pages/Home';





export enum BooksActionsType {
	SET_BOOKS = 'books/SET_BOOKS',
	SET_LOADING = 'books/SET_LOADING'
}


//loading
export  interface SetLoadingActionInterface extends Action<BooksActionsType> {
	type: BooksActionsType.SET_LOADING,
	payload: boolean
}
export const setLoadingAction = ( payload: boolean ): SetLoadingActionInterface => ({
	type: BooksActionsType.SET_LOADING,
	payload
})



//set books
export interface SetBooksActionInterface extends Action<BooksActionsType> {
	type: BooksActionsType.SET_BOOKS,
	payload: IBook[] 
}
export const setBooksAction = ( payload: IBook[] ): SetBooksActionInterface => ({
	type: BooksActionsType.SET_BOOKS,
	payload
})


export const fetchBooks = ( category: string, sortBy: string ) => ( dispatch: any ) => {
	dispatch( setLoadingAction( false )) 
	axios.get(`http://localhost:3001/books?${
		category !== "" ? `category=${category}` : ''}&_sort=${sortBy}&_order=desk`)
	.then(( res ) => {
		dispatch( setBooksAction( res.data ))
	})
}



export type BooksAction = SetLoadingActionInterface | SetBooksActionInterface
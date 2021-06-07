
import { Action } from 'redux';
import { IBook } from './../../pages/Home';

export enum CartActionsType {
	ADD_BOOK_TO_CART = 'cart/ADD_BOOK_TO_CART',
	CLEAR_CART = 'clear/CLEAR_CART',
	REMOVE_CART_ITEM = 'cart/REMOVE_CART_ITEM',
	PLUS_ITEM_CART = 'cart/PLUS_ITEM_CART',
	MINUS_ITEM_CART = 'cart/MINUS_ITEM_CART'
}


export interface AddBookActionInterface extends Action<CartActionsType> {
	type: CartActionsType.ADD_BOOK_TO_CART,
	payload: IBook
}
export const AddBookAction = (payload: IBook): AddBookActionInterface => ({
type: CartActionsType.ADD_BOOK_TO_CART,
payload
})
 


export interface ClearCartActionInterface extends Action<CartActionsType> {
	type: CartActionsType.CLEAR_CART
} 
export const ClearCartAction = (): ClearCartActionInterface => ({
	type: CartActionsType.CLEAR_CART
})




export interface RemoveCartItemActionInterface extends Action<CartActionsType> {
	type: CartActionsType.REMOVE_CART_ITEM,
	payload: number
}
 export const RemoveCartItemAction = ( payload: number ): RemoveCartItemActionInterface => ({
	type: CartActionsType.REMOVE_CART_ITEM,
	payload
})




export interface PlusItemActionInterface extends Action <CartActionsType>{
	type: CartActionsType.PLUS_ITEM_CART,
	payload: number
}
export const PlusItemAction = ( payload: number ): PlusItemActionInterface => ({
	type: CartActionsType.PLUS_ITEM_CART,
	payload
})


export interface MinusItemCartActionInterface extends Action <CartActionsType> {
	type: CartActionsType.MINUS_ITEM_CART,
	payload: number
}

export const MinusItemCartAction = (payload: number): MinusItemCartActionInterface => ({
	type: CartActionsType.MINUS_ITEM_CART,
	payload
})





export type cartActions =  AddBookActionInterface | ClearCartActionInterface | RemoveCartItemActionInterface | PlusItemActionInterface | MinusItemCartActionInterface
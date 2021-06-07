


import { Action } from 'redux';


export enum FiltersActionsType {
	SET_CATEGORY = 'filters/SET_CATEGORY',
	SET_SORT_BY = 'filters/SET_SORT_BY'
}


export interface SetCategoryActionInterface extends Action <FiltersActionsType> {
	type: FiltersActionsType.SET_CATEGORY,
	payload: string
}
export const setCategoryAction = ( payload: string ) => ({
	type: FiltersActionsType.SET_CATEGORY,
	payload
})


export interface SetSortByActionInterface extends Action<FiltersActionsType> {
	type: FiltersActionsType.SET_SORT_BY,
	payload: string
}
export const setSortByAction = ( payload: string ) => ({
	type: FiltersActionsType.SET_SORT_BY,
	payload
})


export type FiltersAction = SetCategoryActionInterface | SetSortByActionInterface
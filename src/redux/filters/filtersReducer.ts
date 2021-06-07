import { FiltersAction, FiltersActionsType } from "./filtersAction"



const initialState = {
	category: "",
	sortBy: 'popular' 
}

export interface FiltersState {
	category: string
	sortBy: string
} 


export const filterReducer = ( state = initialState, action: FiltersAction ) => {

	switch ( action.type ) {
		case FiltersActionsType.SET_CATEGORY: 
		return {
			...state,
			category: action.payload
		}

		case FiltersActionsType.SET_SORT_BY: 
		return {
			...state,
			sortBy: action.payload
		}

		default: return state
	}
}

// здесь не выводим категории, а лишь изменяем действующую категонию на новую 
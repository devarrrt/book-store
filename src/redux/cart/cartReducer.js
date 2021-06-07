import {
	cartActions,
	CartActionsType
} from "./cartActions"


const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0
}




const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0) // к каждому предыдущему товару добавляется новый и их сумма считается

const _get = (obj, path) => {
	const [firstKey, ...keys] = path.split('.');
	return keys.reduce((val, key) => {
		return val[key];
	}, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
	return Object.values(obj).reduce((sum, obj) => {
		const value = _get(obj, path);
		return sum + value;
	}, 0);
};


export const cartReducer = (state = initialState, action) => {

	switch (action.type) {
		case CartActionsType.ADD_BOOK_TO_CART:

			const currenBooksItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload]

			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currenBooksItems,
					totalPrice: getTotalPrice(currenBooksItems),
				}
			}

			const totalCount = getTotalSum(newItems, 'items.length')
			const totalPrice = getTotalSum(newItems, 'totalPrice')

			return {
				...state,
				items: newItems,
					totalCount,
					totalPrice,
			}

		case CartActionsType.CLEAR_CART:
				return {
					items: {},
						totalPrice: 0,
						totalCount: 0
			}

		case CartActionsType.REMOVE_CART_ITEM: {
					const newItems = {
						...state.items
					}
					const currentTotalPrice = newItems[action.payload].totalPrice // здесь получили цену одного товара. взяли объект с пкупками, взяли определенный товар, id котрого передается в action.payload и узнали его цену
					const currentTotalCount = newItems[action.payload].items.length //здесь узнали кол-во данного товара 
					delete newItems[action.payload]; //удаляем среди книг ту, id которой пришел
					return {
						...state,
						items: newItems,
						totalPrice: state.totalPrice - currentTotalPrice,
						totalCount: state.totalCount - currentTotalCount
					}
		 }

		case CartActionsType.PLUS_ITEM_CART: {
					const newObjItems = [
						...state.items[action.payload].items,
						state.items[ action.payload ].items[0]
					]
					const newItems = {
						...state.items,
						[action.payload]: {
										items: newObjItems,
										totalPrice: getTotalPrice(newObjItems),
						}
					}
					const totalCount = getTotalSum(newItems, 'items.length');
					const totalPrice = getTotalSum(newItems, 'totalPrice');

					return {
									...state,
									items: newItems,
									totalCount,
									totalPrice,
					}
				}

				case CartActionsType.MINUS_ITEM_CART: {
					const oldItems = state.items[action.payload].items
					const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
					const newItems = {
									...state.items,
									[action.payload]: {
													items: newObjItems,
													totalPrice: getTotalPrice(newObjItems)
									},
					};
					const totalCount = getTotalSum(newItems, 'items.length');
					const totalPrice = getTotalSum(newItems, 'totalPrice');

					return {
									...state,
									items: newItems,
									totalCount,
									totalPrice,
					}
	}


				default:
					return state

	}
}
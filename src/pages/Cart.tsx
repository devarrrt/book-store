import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from '../components';
import { IBook } from './Home';
import { ClearCartAction, RemoveCartItemAction, PlusItemAction, MinusItemCartAction } from './../redux/cart/cartActions';

interface Props { }


const Cart = (props: Props) => {
	//@ts-ignore
	const {totalCount, totalPrice, items} = useSelector(({ cart }) => cart)
	const dispatch = useDispatch()


	const booksOnCart = Object.keys(items).map( key => {
		return items[ key ].items[0]
	}) //проходимся по обхекту, берем его ключи ( 0,1,2... ), затем берем каждый отдельный и выводим объект 

const clearCart = ( ) => {
	if ( window.confirm( 'Все товары будут удалены' )){
		dispatch( ClearCartAction() )
	}
}


const removeBooks = ( id: number) => {
	if ( window.confirm( 'Данный товар будет удален' )){
		dispatch( RemoveCartItemAction(id) )
	}
}

const addBookToCart = ( id: number ) => (
	dispatch(PlusItemAction(id))
)

const decBookToCart = ( id: number ) => {
	dispatch(MinusItemCartAction(id))
}



	return (
		<div className="container container--cart">
			<div className="cart">

				<div className="cart__top">
					<h2 className="content__title">
						Корзина покупок
            </h2>
					<div className="cart__clear">
						<button
							className="cart__clear-button"
							onClick={clearCart}>
							Очистить корзину
              </button>
					</div>
				</div>

				<div className="cart__items">
					{ booksOnCart.map(( item: IBook, id: number ) => (
						<CartItem 
						{ ...item } 
						key={ id } 
						totalPrice={ items[ item.id ].totalPrice } //цена каждой отдельной книги
						totalCount = { items[ item.id ].items.length } //кол-во  каждой книги
						removeBooks={ removeBooks } 
						decBookToCart={ decBookToCart }
						addBookToCart={ addBookToCart }
						/>
					)) }
				</div>

				<div className="cart__bottom">
					<div className="cart__bottom-row">
						<div className="cart__bottom-details">
							<span> Всего книг: <b>  {totalCount} шт.</b> </span> <br />
							<span> Сумма заказа: <b> {totalPrice} ₽ </b> </span>
						</div>
						<div className="cart__bottom-buttons">
							<Link
								className="cart__bottom-link"
								to="/">
								<span>Вернуться назад</span>
							</Link>
							<br />
							<button
								className="cart__bottom-link">
								Оплатить
                  </button>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Cart

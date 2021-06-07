import React from 'react'
import { IBook } from './../pages/Home';

interface ICartItem extends IBook  {
	totalPrice: number
	totalCount: number
	removeBooks: ( id: number )=> void
	decBookToCart: ( id: number ) => void
	addBookToCart: ( id: number ) => void
}


const CartItem: React.FC<ICartItem> = ({    
		 id,
    name,
    types,
    langs,
    author,
    imageUrl,
    totalPrice,
    totalCount, 
		removeBooks,
		decBookToCart,
		addBookToCart
	}) => {


			const onRemoveBook = () => {
				removeBooks(id) //передает id в Сart
			}


			
	return (
		<div className="cart__item">
		<div className="cart__item-img">
				<img
						className="cart__item-image"
						src={ imageUrl }
						alt="Pizza"
				/>
		</div>
		<div className="cart__item-content">
				<div className="cart__item-info">
						<h3>{ name } </h3>
						<h5>{ author } </h5>
				</div>

				<div className="cart__item-count">
						<button
								className="cart__item-button-count"
								onClick={()=> decBookToCart(id)}
						>-</button>

						<b> { totalCount } шт. </b>
						<button
								className="cart__item-button-count"
								onClick={()=>addBookToCart(id)}
						>+</button>
				</div>

				<div className="cart__item-price">
						<b> { totalPrice } ₽</b>
				</div>

				<div>
						<button 	
						onClick={ onRemoveBook }
						className="cart__item-button">
				 Удалить 
								</button>
				</div>
		</div>
</div>
	)
}



export default CartItem

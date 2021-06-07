import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/image/book.png'
import books from '../assets/image/books.png'
import { useSelector } from 'react-redux';


interface Props { }


const Header = (props: Props) => {
	//@ts-ignore
const totalPrice = useSelector(state => state.cart.totalPrice)
	//@ts-ignore
const totalCount = useSelector( state => state.cart.totalCount )


	return (
		<div className="header">
			<div className="header__container">
			<div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <div>
                    <h3> История на любой вкус </h3>
                </div>
              </div>

							<div className="header__cart">
							<Link to="/cart">
								<button className="button button--cart">
									<span> { totalPrice } ₽.</span>
									<img
									      className="header__cart_img"
                        src={ books }
                        alt="cart_img"
									/>
								 <span> { totalCount } шт. </span>
								</button>
							</Link>
							</div>
			</div>
			</div>
	)
}



export default Header

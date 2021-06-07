import React, { useState } from 'react'
import { IBook } from './../pages/Home';
import cn from 'classnames'



interface IBookBlock extends IBook {
addBookToCart: ( obj: any ) => void
}


const lang = ['оригинал', 'перевод'] //это мы отображаем на странице
const cover = ['кожаный переплет', 'обычный переплет']


const BookBlok: React.FC<IBookBlock> = ({  id, name, author, price, imageUrl, types, langs, addBookToCart }) => {
const [ langBook, setLangBook ] = useState( langs[0] ) // это будет активным элементом
const [ coverBook, setCoverBook ] = useState( types[0] )

const onSelectLang = ( el: any ) => {
	setLangBook( el )
}

const onSelectCover = ( el: any ) => {
	setCoverBook( el )
}

const addBook = ( ) => {
	const bookObj = {
		id,
		name,
		imageUrl,
		price,
		 cover: cover[coverBook],
		 lang: lang[langBook]
	}
	addBookToCart( bookObj )
}



	return (
		<>
			<div className="book-block">
				<h4 className="book-block__title"> {name} </h4>
				<h5 className="book-block__author"> {author}  </h5>
				<img
					className="book-block__image"
					alt="bookImage"
					src={imageUrl}
				/>
				<div className="book-block__selector">
					<ul>
						{lang.map((lng, id) => (
							<li
								key={id}
								className={ cn({
									'book-block__active': langBook === id,
									'book-block__disabled': !langs.includes( id )
								}) }
								onClick={ ()=> onSelectLang( id )}
								>
								{ lng }
							</li>
						))}
					</ul>

					<ul>
						{cover.map((el, index) => (
							<li
								key={index}
								className={ cn({
									'book-block__active': coverBook === index
								})}
								onClick = { ()=> onSelectCover( index ) }
								>
								{ el }
							</li>
						))}
					</ul>
				</div>

				<div className="book-block__bottom">
					<div className="book-block__price"> {price} ₽. </div>
					<button
						className="book-block__button"
						onClick={ addBook }>
						Добавить в корзину
          </button>
				</div>
			</div>
		</>
	)
}

export default BookBlok

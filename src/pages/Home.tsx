import React, { useEffect, useState } from 'react'
import { BookBlock, Categories } from '../components'
import SortBooks from './../components/SortBooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksAction';
import Search from './../components/Search';
import { AddBookAction } from './../redux/cart/cartActions';

interface Props { }

export interface IBook {
	id: number
	name: string
	author: string
	price: number
	types: Array<number>
	langs: Array<number>
	category: number
	imageUrl: string
}

const booksCategoryGenge = [
	"Романы",
	"Детективы",
	"Проза",
	"Повести",
	"Поэзия"
]
const sortBooks = [
	{ name: 'популярности', type: 'popular' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'alphabet' },
]



const Home = (props: Props) => {
	const dispatch = useDispatch()

	//@ts-ignore
	const {books, isLoaded } = useSelector(state => state.books )
	//@ts-ignore
	const {category, sortBy} = useSelector(state => state.filters) // получили из редьюсера, там категория === ""
	const [value, setValue] = useState('')

	useEffect(() => {
		dispatch(fetchBooks( category, sortBy ))
	}, [dispatch, category, sortBy])

	const addBookToCart = ( obj: IBook ) => {
		dispatch( AddBookAction( obj ) )
	}


	if (!isLoaded) {
		return <p> Loaded... </p>
	}

	const filtersData = books.filter((book: IBook) => book.author.toLowerCase().includes(value.toLowerCase()) || book.name.toLowerCase().includes(value.toLowerCase()))


	return (
		<div className="container">
			<div className="content__top">
				<Categories
					categories={booksCategoryGenge}
					activeCategory={category}
				/>
				<SortBooks
					sort={sortBooks}
					activeSort={sortBy}
				/>
			</div>

			<Search value={ value } setValue={ setValue }  />


			<div className="content__items">
				{filtersData.map((book: IBook) => (
					<BookBlock
						key={book.id}
						addBookToCart={ addBookToCart }
						{...book} />
				))}
			</div>

		</div>
	)
}

export default Home 
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { setCategoryAction } from './../redux/filters/filtersAction';


export interface ICategories {
	categories: Array<string>
	activeCategory: string
}




const Categories: React.FC<ICategories> = ({ categories, activeCategory }) => {
const dispatch = useDispatch( )

const onSelectCategory = useCallback(( cat: string ) => {
		dispatch( setCategoryAction( cat ))
	}, [dispatch ])


	return (
		<div className="categories">
						<ul> 
							<li className={ activeCategory === "" ? 'active' : ''  }
							onClick={ ()=> onSelectCategory("")}
							>
									Все жанры
							</li>
 
								{ categories.map(( cat, id ) => (
									<li className={ activeCategory === cat ? "active" : '' }
									key={ id }
									//@ts-ignore ошибка типизации, потому что перепутала типы string и number
									onClick={ ( ) => onSelectCategory( id ) }> 
									{ cat } </li> 
								))} 
							</ul> 
		</div>
	)
}

export default Categories

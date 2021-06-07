import React  from 'react'
import search from '../assets/image/search.svg'


interface ISearch {
	value: string,
	setValue: (e: any) => void
}

const Search: React.FC<ISearch> = ({ value, setValue }) => {
return (
	<div className="search">
	<img className="search__icon" src={search} alt="search" />
	<input type="text"
		name="search"
		id="search"
		placeholder="Поиск по названию или автору"
		value={value}
		onChange={(e) => setValue(e.target.value)}
	/>
</div>
)
}



export default Search

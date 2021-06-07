import React from 'react'
import { Route, Switch } from 'react-router'

import { Header } from './components'
import Cart from './pages/Cart'
import Home from './pages/Home'

interface Props { }


const App = (props: Props) => {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
					<Switch>
					<Route path="/" exact component={ Home } />
					<Route path="/cart" component={ Cart } />
					</Switch>
			</div>
		</div>
	)
}

export default App

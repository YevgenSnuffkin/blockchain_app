import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/index.css'
import App from './containers/App'
import { Provider } from 'react-redux'
import Store from './store'
import { fetchBlockchain, getChart } from './actions'


const app = document.getElementById('root')

Store.dispatch(fetchBlockchain())
Store.dispatch(getChart())

ReactDOM.render(<Provider store={Store}>
	<App />
</Provider>, app);
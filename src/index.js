import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import redusers from './reducers'
import middleware from './middleware'

const store = createStore(redusers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
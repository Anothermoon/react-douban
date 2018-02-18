import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware
))
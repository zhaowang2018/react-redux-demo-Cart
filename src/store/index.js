import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import cart from "../reducer/cart";
import products from "../reducer/products";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products,
    cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )


)

export default store
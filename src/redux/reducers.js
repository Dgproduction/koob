import { combineReducers } from 'redux'
import cartReducer from './cart/cartReducer'
import productReducer from './products/productReducer'
import userReducer from './user/userReducer'

const reducers = combineReducers({
  cart: cartReducer,
  products: productReducer, 
  user: userReducer
})

export default reducers
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'

import products from './products'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products,
    auth
  })

export default createRootReducer

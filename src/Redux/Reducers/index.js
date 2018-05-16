import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import CategoriesReducer from './CategoriesReducer'
import ProductsReducer from './ProductsReducer'
import ItemsReducer from './ItemsReducer'
import OrdersReducer from './OrdersReducer'

export default combineReducers({
    routing: routerReducer,
    categoriesState: CategoriesReducer,
    productsState: ProductsReducer,
    itemsState: ItemsReducer,
    ordersState: OrdersReducer
})
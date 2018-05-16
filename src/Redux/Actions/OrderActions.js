import axios from 'axios'
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    PLACE_ORDER_START,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,
    GET_ORDERS_START,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL

} from './types'

// import { postOrder, getOrders } from '../../ApiEndPoints'

export const addToCart = (item) => {
    return ({ type:ADD_TO_CART, payload: item })
}

export const removeFromCart = (item) => {
    return ({ type:REMOVE_FROM_CART, payload:item })
}

// export const placeOrder = (orderObject) => {
//     return (dispatch) => {
//          dispatch({ type:PLACE_ORDER_START })

//         axios.post(postOrder, orderObject)
//         .then(res => {
//             dispatch({ type:PLACE_ORDER_SUCCESS })
//         })
//         .catch(err => {
//             dispatch({ type: PLACE_ORDER_FAIL, payload:'order could not be placed' })
//         })
//     }
// }

// export const retrieveOrders = () => {
//     return (dispatch) => {
//         dispatch({ type: GET_ORDERS_START })

//         axios.get(getOrders)
//         .then(res => {
//             dispatch({ type:GET_ORDERS_SUCCESS, payload: res.data.data })
//         })
//         .catch(err => {
//             dispatch({ type:GET_ORDERS_FAIL, payload: 'error' })
//         })
//     }
// }
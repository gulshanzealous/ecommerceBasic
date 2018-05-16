import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    PLACE_ORDER_START,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,
    GET_ORDERS_START,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL

} from '../Actions/types'

const INITIAL_STATE = {
    orders: [],
    cart : [],
    orderStatus:false,
    loadingOrder:false,
    error:'',
    errorStatus:false
}

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case ADD_TO_CART:{
            const selectedItem = action.payload
            const findCartItem = state.cart.find(cartItem => cartItem.itemId === selectedItem.itemId )
            if(findCartItem){
                const newCart = state.cart.map(cartItem => {
                    if(cartItem.itemId === selectedItem.itemId){
                        cartItem.quantity = cartItem.quantity + 1
                        cartItem.subTotal = selectedItem.salesPrice * cartItem.quantity
                        return cartItem
                    }
                    return cartItem
                })
                return { ...state, cart: newCart }
            } else {
                console.log(selectedItem)
                const cartItemObject = { item:selectedItem, itemId: selectedItem.itemId , subTotal:selectedItem.salesPrice , quantity:1 }
                return { ...state, cart: [ cartItemObject, ...state.cart ] }
            }
        }
        // case REMOVE_SINGLE_ORDER_ITEM:{
            
        // }
        case REMOVE_FROM_CART:{
            const newCart = state.cart.filter( cartItem => cartItem.itemId !== action.payload.itemId )
            return { ...state, cart: newCart }
        }
        case PLACE_ORDER_START:
            return { ...state, loadingOrder:true, error:'',errorStatus:false }
        case PLACE_ORDER_SUCCESS:
            return { ...state, orderStatus:'success', loadingOrder:false }
        case PLACE_ORDER_FAIL:
            return { ...state, orderStatus:'fail', loadingOrder:false, error:action.payload, errorStatus:true }
        case GET_ORDERS_START:
            return { ...state, loadingOrder:true, error:'',errorStatus:false }
        case GET_ORDERS_SUCCESS:
            return { ...state, orders:action.payload, loadingOrder:false }
        case GET_ORDERS_FAIL:
            return { ...state, loadingOrder:false, error:action.payload, errorStatus:true }
        default:
            return state
    }
}


// cart = [
//     { item:{}, subTotal:0, quantity:0, itemId:itemId }
// ]

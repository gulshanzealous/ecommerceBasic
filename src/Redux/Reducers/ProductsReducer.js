
import {
    SEED_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    PRODUCT_SELECTED

} from '../Actions/types'

const INITIAL_STATE = {
    allProducts: [],
    loadingProducts:false,
    error:'',
    errorStatus:false,
    selectedProduct:null
}

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case SEED_PRODUCTS:
            return { ...state, loadingProducts:true }
        case GET_PRODUCTS_SUCCESS:
            return { ...state, loadingProducts:false,allProducts:action.payload, selectedProduct:action.payload[0] }
        case GET_PRODUCTS_FAIL:
            return { ...state, loadingProducts:false, error:action.payload, errorStatus:true }
        case PRODUCT_SELECTED:
            return { ...state, selectedProduct:action.payload  }
        default:
            return state
    }
}
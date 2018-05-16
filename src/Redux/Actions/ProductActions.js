import axios from 'axios'
import {
    SEED_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    PRODUCT_SELECTED

} from './types'

import { getProducts } from '../../ApiEndPoints'

export const seedProducts = () => {
    return async(dispatch) => {
        // dispatch({ type: SEED_PRODUCTS })

        // axios.get(getProducts)
        // .then(res => {
        //     console.log(res.status)
        //     dispatch({ type:GET_PRODUCTS_SUCCESS, payload: res.data.data })
        // })
        // .catch(err => {
        //     dispatch({ type:GET_PRODUCTS_FAIL, payload: 'error' })
        // })
        try{
            dispatch({ type: SEED_PRODUCTS })
            let res = await axios.get(getProducts)
            console.log(res.status)
            return res.status === 200 ? dispatch({ type:GET_PRODUCTS_SUCCESS, payload: res.data.data }) : null
        }catch(e){
            dispatch({ type:GET_PRODUCTS_FAIL, payload: 'error' })
        }

    }
}

export const productSelected = (product) => {
    return ({ type:PRODUCT_SELECTED, payload:product })
}
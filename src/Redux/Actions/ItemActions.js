import axios from 'axios'
import {
    SEED_ITEMS,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAIL,
    ITEM_SELECTED

} from './types'

import { getItems } from '../../ApiEndPoints'

export const seedItems = () => {
    return (dispatch) => {
        dispatch({ type: SEED_ITEMS })

        axios.get(getItems)
        .then(res => {
            dispatch({ type:GET_ITEMS_SUCCESS, payload: res.data.data })
        })
        .catch(err => {
            dispatch({ type:GET_ITEMS_FAIL, payload: 'error' })
        })
    }
}

export const itemSelected = (item) => {
    return ({ type:ITEM_SELECTED, payload:item })
}
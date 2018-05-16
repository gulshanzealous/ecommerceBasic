import axios from 'axios'
import {
    SEED_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    CATEGORY_SELECTED

} from './types'

import { getCategories } from '../../ApiEndPoints'

export const seedCategories = () => {
    return (dispatch) => {
        dispatch({ type: SEED_CATEGORIES })

        axios.get(getCategories)
        .then(res => {
            dispatch({ type:GET_CATEGORIES_SUCCESS, payload: res.data.data })
        })
        .catch(err => {
            dispatch({ type:GET_CATEGORIES_FAIL, payload: 'error' })
        })
    }
}

export const categorySelected = (category) => {
    return ({ type: CATEGORY_SELECTED, payload:category })
}
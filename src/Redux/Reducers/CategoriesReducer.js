import {
    SEED_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    CATEGORY_SELECTED

} from '../Actions/types'

const INITIAL_STATE = {
    allCategories : [],
    loadingCategories:false,
    error:'',
    errorStatus:false,
    selectedCategory:null
}

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case SEED_CATEGORIES:
            return { ...state, loadingCategories:true }
        case GET_CATEGORIES_SUCCESS:
            return { ...state, allCategories:action.payload, loadingCategories:false, selectedCategory:action.payload[0] }
        case GET_CATEGORIES_FAIL:
            return { ...state, loadingCategories:false, error:action.payload, errorStatus:true }
        case CATEGORY_SELECTED:
            return { ...state, selectedCategory: action.payload }
        default:
            return state
    }
}
import {
    SEED_ITEMS,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAIL,
    ITEM_SELECTED

} from '../Actions/types'

const INITIAL_STATE = {
    allItems : [],
    loadingItems:'NA',
    error:'',
    errorStatus:false,
    selectedItem:null
}

export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case SEED_ITEMS:
            return { ...state, loadingItems:true }
        case GET_ITEMS_SUCCESS:
            return { ...state, loadingItems:false, allItems:action.payload, selectedItem:action.payload[0] }
        case GET_ITEMS_FAIL:
            return { ...state, loadingItems:false, error:action.payload, errorStatus:true }
        case ITEM_SELECTED:
            return { ...state, selectedItem:action.payload }
        default:
            return state
    }
}
import { GET_ALL_CATS, GET_ALL_CATS_SUCCESS, GET_ALL_CATS_FAILED } from '../types';
export const singlelistingState = {
    allCats: [],
    usedBrands: [],
    loading: false,
    error: null,
}

export default function singlelisting(state = singlelistingState, action) {
    switch (action.type) {
        case GET_ALL_CATS:
            return {
                ...state,
                loading: true,
            }
        case GET_ALL_CATS_SUCCESS:
            return {
                ...state,
                loading: false,
                allCats: action.payload
            }
        case GET_ALL_CATS_FAILED:
            return {
                ...state,
                loading: false,
                error: 'Someting went wrong!'
            }
        default:
            return state
    }
}
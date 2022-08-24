import { json } from "express"

const GET_PRODUCTS = '@products/GET_PRODUCTS'

const initialState = {
    list: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                list: action.payload
            }
        }
        default:
            return state
    }
}

const getProductsFromServer = () => {
    return (dispatch, getState) => {
        fetch('/api/v1/products')
        .then((data) => data.json())
    }
}
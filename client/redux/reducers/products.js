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

export const getProductsFromServer = () => {
    return (dispatch) => {
        fetch('/api/v1/products')
        .then((data) => data.json())
        .then((product) => dispatch({ type: GET_PRODUCTS, payload: product }))
    }
}
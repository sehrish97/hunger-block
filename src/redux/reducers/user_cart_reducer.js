import { status_constants, user_cart_constants } from "../constants";

const initialState = {
    data: [],
    status: status_constants.IDLE,
    error: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case user_cart_constants.USER_CART:
            return {
                ...state,
                status: status_constants.LOADING
            }
        case user_cart_constants.GET_USER_CART_SUCCESS:
            return {
                ...state,
                status: status_constants.SUCCESS,
                data: [...payload]
            }
        case user_cart_constants.GET_USER_CART_ERROR:
            return {
                ...state,
                status: status_constants.ERROR,
                error: payload
            }
        default:
            return state
    }
};



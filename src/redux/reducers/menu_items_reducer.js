import { menu_items_constants, status_constants } from "../constants";

const initialState = {
    data: [],
    status: status_constants.IDLE,
    error: null
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case menu_items_constants.MENU_ITEMS:
            return {
                ...state,
                status: status_constants.LOADING
            }
        case menu_items_constants.GET_MENU_ITEMS_SUCCESS:
            return {
                ...state,
                status: status_constants.SUCCESS,
                data: [...payload]
            }
        case menu_items_constants.GET_MENU_ITEMS_ERROR:
            return {
                ...state,
                status: status_constants.ERROR,
                error: payload
            }
        default:
            return state
    }
};



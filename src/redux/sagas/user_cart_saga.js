import { put, takeEvery } from "redux-saga/effects";
import { apiHandle } from "../../config/api_handle/api_handle";
import { user_cart_constants } from "../constants";

function* get_user_cart_items() {
    try {
        let response = yield apiHandle.get('/products')
        let data = yield response.data

        if (response.status >= 200 && response.status < 300) {
            yield put({ type: user_cart_constants.GET_USER_CART_SUCCESS, payload: data });
        } else {
            throw response;
        }
    } catch (error) {
        yield put({ type: user_cart_constants.GET_USER_CART_ERROR, payload: error });
    }
}


function* user_cart_items_saga() {
    yield takeEvery(user_cart_constants.USER_CART, get_user_cart_items)
}


export { user_cart_items_saga }


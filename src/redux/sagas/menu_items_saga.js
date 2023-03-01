import { put, takeEvery } from "redux-saga/effects";
import { apiHandle } from "../../config/api_handle/api_handle";
import { menu_items_constants } from "../constants";

function* get_menu_items() {
    try {
        let response = yield apiHandle.get('/products')
        let data = yield response.data

        if (response.status >= 200 && response.status < 300) {
            yield put({ type: menu_items_constants.GET_MENU_ITEMS_SUCCESS, payload:data });
        } else {
            throw response;
        }
    } catch (error) {
        yield put({ type: menu_items_constants.GET_MENU_ITEMS_ERROR, payload:error });
    }
}


function* menu_items_saga() {
    yield takeEvery(menu_items_constants.MENU_ITEMS, get_menu_items)
}



export { menu_items_saga } 

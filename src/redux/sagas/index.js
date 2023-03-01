import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { menu_items_saga } from './menu_items_saga';
import { user_cart_items_saga } from './user_cart_saga';

function* root_saga() {
    yield all([
        menu_items_saga(),
        user_cart_items_saga()
    ]);
}



export default root_saga
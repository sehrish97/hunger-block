import { combineReducers } from "redux"
import menu_items_reducer from "./menu_items_reducer"
import user_cart_reducer from "./user_cart_reducer"


const root_reducer = combineReducers({
    menu_items:menu_items_reducer,
    user_cart:user_cart_reducer
})



export default root_reducer
import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";



// combineReducers - это функция которая объединяет reducer-ы
let rootReducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersPageReducer,
    auth:authReducer
}
)


export type AppStateType = ReturnType <typeof rootReducers>

let store = createStore(rootReducers)

//@ts-ignore
window.store = store

export default store
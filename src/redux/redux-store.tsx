import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"



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

let store = createStore(rootReducers,applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store

export default store
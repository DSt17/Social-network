import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersPageReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

export type AppStateType = ReturnType<typeof rootReducers>


// combineReducers - это функция которая объединяет reducer-ы
let rootReducers = combineReducers({
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersPageReducer,
        auth: authReducer,
        form: formReducer
    }
)


let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store

export default store
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
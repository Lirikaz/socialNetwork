import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you', likesCount: 2},
                {id: 2, post: 'Good morning, boy', likesCount: 4},
            ],
            newPostText: 'YO-YO'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ilia'},
                {id: 2, name: 'Alexey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Michael'},
                {id: 5, name: 'Liza'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Who are u?'},
            ],
            newMessageText: 'First Message'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;


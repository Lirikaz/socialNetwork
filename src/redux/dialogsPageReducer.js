const UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`;
const SEND_MESSAGE = `SEND-MESSAGE`;

const dialogsPageReducer = (state, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
        case SEND_MESSAGE:
            let message = state.newMessageText;
            state.newMessageText = ``;
            state.messages.push({id: 4, message: message});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    message: message
})

export default dialogsPageReducer;
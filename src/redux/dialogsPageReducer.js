const SEND_MESSAGE = `SEND-MESSAGE`;

let initialState = {
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
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let message = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: message}],
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsPageReducer;
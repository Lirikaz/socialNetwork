import s from './Dialogs.module.css';
import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageTextCreator, sendMessageCreator} from '../../redux/dialogsPageReducer';


const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messagesElements = state.messages.map(m => <Message message={m.message}/>);
  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageText = (e) => {
    let message = e.target.value;
    props.store.dispatch(updateNewMessageTextCreator(message))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
            <textarea value={newMessageText}
                      onChange={onNewMessageText}>
            </textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;




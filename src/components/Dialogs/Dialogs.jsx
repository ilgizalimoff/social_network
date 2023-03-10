import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx'
import {sendMessageCreator, updateNewMessageBodyCreator } from '../.././redux/dialogs-reducer';

const Dialogs=(props)=>
{
let state=props.dialogsPage;

let dialogElements=state.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
let messageElements=state.messages.map(m=><Message message={m.message}/>);
let newMessageBody=state.newMessageBody;

let onSendMessageClick=()=>{
    props.sendMessage();
}
let onNewMessageChange=(e)=>{
    let body=e.target.value;
    props.updateNewMessageBody(body);
}
    return (    
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}   
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange} 
                                  placeholder='enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add message</button>
                    </div>
                </div>
            </div>
            <div className={s.add_message}>
                Тут была textarea 
            </div>
        </div>
    )
}


export default Dialogs;
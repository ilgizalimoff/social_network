import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from "react-redux";

let mapStateToProsp=(state)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
const DialogsContainer=connect(mapStateToProsp, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
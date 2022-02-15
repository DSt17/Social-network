import React from "react";
import {
    addMessageActionCreator,
    ChangeNewMessageCallbackActionCreator,
    DialogPageType,
} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType


type mapStateToPropsType = {
    dialogsPage: DialogPageType,
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

type mapDispatchToPropsType = {
    addMessage: () => void
    newMessageChangeHandler: (text: string) => void
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        newMessageChangeHandler: (text: string) => {
            dispatch(ChangeNewMessageCallbackActionCreator(text))
        },
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)


const DialogsContainer =  connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer;

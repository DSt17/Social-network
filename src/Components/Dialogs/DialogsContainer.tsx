import {
    addMessageActionCreator,
    ChangeNewMessageCallbackActionCreator,
    DialogPageType,
} from "../../redux/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";

import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import React from "react";


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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
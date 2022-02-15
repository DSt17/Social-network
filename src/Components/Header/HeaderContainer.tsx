import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
    isAuth: boolean,
    login: string,
    getAuthUserData:()=>void
}

function HeaderContainer(props: HeaderContainerPropsType) {
    useEffect(() => {
        props.getAuthUserData()
    })

    return <Header {...props}/>

}


const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
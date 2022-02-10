import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getHeader} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
    isAuth: boolean,
    login: string,
    getHeader:()=>void
}

function HeaderContainer(props: HeaderContainerPropsType) {
    useEffect(() => {
        props.getHeader()
    })


    return <Header {...props}/>

}


const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getHeader})(HeaderContainer)
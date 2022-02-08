import React, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
    isAuth:boolean,
    login: string,
    setAuthUserData:(userId: number, email: string, login: string)=>void
}

function HeaderContainer(props: HeaderContainerPropsType) {
    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id,login,email} = response.data.data
                    props.setAuthUserData(id,email,login)
                }
            })
    })


    return <Header {...props}/>

}



const mapStateToProps = (state:any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";


type HeaderPropsType = {
    isAuth: boolean,
    login: string,
}
const Header = (props:HeaderPropsType) => {
    return <header className={s.header}>
        <img alt={"header-img"}
            src={"https://juniortech.org/wp-content/uploads/2019/09/invention-camp-300x300px-2x.png"}/>
        <div className={s.loginBlock}>
            {props.isAuth ?
                props.login
                :
                <NavLink to={'./login'}>Login</NavLink>
            }
        </div>
    </header>
}
export default Header;


import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav} >
        <div className={s.item } >
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            < NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            < NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.activeLink}>Setting</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/friends' activeClassName={s.activeLink} className={s.friends}>Friends</NavLink>
            <div>
                <div className={s.inArow}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpNtcouOJeF6jccKkIYT1f1L9J0y2jBEgYw&usqp=CAU"}/>
                <p>Andrew</p>
                </div>
                <div className={s.inArow}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtU8DcpxLJ2NVPvoopnuZWtlMKkXhmqz0Yg&usqp=CAU"}/>
                <p >Sasha</p>
                </div>
                <div className={s.inArow}>
                <img src={"https://i.pinimg.com/originals/39/83/9e/39839e7885909722fe782e815c599f75.png"}/>
                <p>Sveta</p>
                </div>
            </div>
        </div>
    </nav>
}
export default Navbar;
import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'


type dialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: dialogItemPropsType) => {

    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>

            <img className={ s.img} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtU8DcpxLJ2NVPvoopnuZWtlMKkXhmqz0Yg&usqp=CAU"}/>

            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;
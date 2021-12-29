import React from "react";
import s from "../../Users/users.module.css";
import loader from "../../../assets/images/loader.gif";

let Preloader = (props:any) => {
    return(
        <div>
            <img className={s.small} src={loader}/>
        </div>
    )
}

export default Preloader
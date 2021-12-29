import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {userType} from "../../redux/usersPage-reducer";


type usersPropsType = {
    users: Array<userType>
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

let Users = (props: usersPropsType) => {


    let pagesCount = props.totalCount / props.pageSize
    let pages = []
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p =>
                <span className={props.currentPage === p ? s.selectedPage : ""} onClick={() => {
                    props.onPageChanged(p)
                }}>  {p} </span>
            )}
        </div>
        {
            props.users.map((el) => <div key={el.id}>
            <span>
                <div>
                    <img className={s.UsersPhoto} src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                </div>
                <div>
                    {el.followed ? <button onClick={() => {
                            props.unFollow(el.id)
                        }}>unFollow</button>
                        : <button onClick={() => {
                            props.follow(el.id)
                        }}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{el.name}</div>
                    <div>{el.status}</div>
                </span>
                <span>
                     <div>{"el.location.country"}</div>
                    <div>{"el.location.city"}</div>
                </span>
            </span>
                </div>
            )
        }
    </div>

}

export default Users
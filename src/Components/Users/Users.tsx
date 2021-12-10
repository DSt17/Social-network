import React from "react";
import {usersPropsType} from "./UsersContainer";
import s from './users.module.css'

let Users = (props: usersPropsType) => {

    if(props.users.length === 0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped-1.png",
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
                {
                    id: 2,
                    photoUrl: "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped-1.png",
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped-1.png",
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ])
    }
    return <div>
        {
            props.users.map((el) => <div key={el.id}>
            <span>
                <div>
                    <img className={s.UsersPhoto} src={el.photoUrl}/>
                </div>
                <div>
                    {el.followed
                        ? <button onClick={() => {props.unFollow(el.id)}}>Follow</button>
                        : <button onClick={() => {props.follow(el.id)}}>unFollow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{el.fullName}</div>
                    <div>{el.status}</div>
                </span>
                <span>
                     <div>{el.location.country}</div>
                    <div>{el.location.city}</div>
                </span>
            </span>
                </div>
            )
        }
    </div>
}
export default Users;
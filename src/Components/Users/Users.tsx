import React from "react";
import {usersPropsType} from "./UsersContainer";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component<usersPropsType, usersPropsType> {

        componentDidMount() {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }

    render() {
        return <div>

            {
                this.props.users.map((el) => <div key={el.id}>
            <span>
                <div>
                    <img className={s.UsersPhoto} src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                </div>
                <div>
                    {el.followed ? <button onClick={() => {
                            this.props.unFollow(el.id)
                        }}>unFollow</button>
                        : <button onClick={() => {
                            this.props.follow(el.id)
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
}


export default Users;
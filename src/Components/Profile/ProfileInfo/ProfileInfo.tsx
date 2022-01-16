import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props: any) => {
    if (props.profile.length === 0) {
        return <div>
            <Preloader/>
        </div>
    }
    return (
        <div>
            <div>
                <img className={s.img}
                     src={"https://hbomax-images.warnermediacdn.com/images/GXr7SEgRi2sLCAAEAAAQu/tileburnedin?size=1280x720&partner=hbomaxcom&v=1c179c6571a21547a6c6b7e06dfd7565&host=artist.api.cdn.hbo.com&w=1280"}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>
                    <span>О себе: </span><span>{props.profile.aboutMe}</span>
                    <div>
                        <p>Мои контакты:</p>
                        <ul>
                            <li><a href={props.profile.contacts.facebook}>facebook</a></li>
                            <li><a href={props.profile.contacts.vk}>vk</a></li>
                            <li><a href={props.profile.contacts.instagram}>instagram</a></li>
                            <li><a href={props.profile.contacts.github}>github</a></li>
                        </ul>
                    </div>
                    <span>Ищу работу:</span><span>{props.profile.lookingForAJob ? " ДА!" : props.profile.lookingForAJobDescription} </span>

                </div>
                ava + description
            </div>
        </div>

    )
}
export default ProfileInfo;
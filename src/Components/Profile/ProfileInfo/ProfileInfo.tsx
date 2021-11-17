import React from "react";
import s from "./ProfileInfo.module.css"




const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img} src={"https://hbomax-images.warnermediacdn.com/images/GXr7SEgRi2sLCAAEAAAQu/tileburnedin?size=1280x720&partner=hbomaxcom&v=1c179c6571a21547a6c6b7e06dfd7565&host=artist.api.cdn.hbo.com&w=1280"}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}
export default ProfileInfo;
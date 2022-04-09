import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props: any) => {
    if (props.profile.length === 0) {
        return <div>
            <Preloader/>
        </div>
    }
    return (
        <div>
            {/*<div>
                <img alt={"profile info"} className={s.img}
                     src={"https://hbomax-images.warnermediacdn.com/images/GXr7SEgRi2sLCAAEAAAQu/tileburnedin?size=1280x720&partner=hbomaxcom&v=1c179c6571a21547a6c6b7e06dfd7565&host=artist.api.cdn.hbo.com&w=1280"}/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img alt={"profilePhoto"} src={props.profile.photos.large ? props.profile.photos.large : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDRAPDQ0NDQ0NDQ0NDQ8NDQ0NFREWIhURFRUYHSggGBolGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQUEAwYCB//EADoQAAIBAQIKBggHAQEAAAAAAAABAgMEEQUSFCExM1JxkrEVQVFyouETIlNhc5Gy0TJigqHBwvCBQv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD+4kAAoIAKCACggAFIABSAAAAKQACkAAFIABSAAUgAFIAKQACghQBAUCAACkKQCkKQAAUCAAAAAAAApAAAAAAAAAAAAAAACgACAFAgKQACkAApxvCVHa8LA6wcnSdDa8LHSdDa8LA6wcnSdDa8LHSdDa8LA6wcnSdDa8LHSdDa8LA6wcnSdDa8LHSdDa8LA6wcnSdDa8LHSdDa8LA6wcnSdDa8LHSdDa8LA6wcnSdDa8LOqMk0mtDSa3AUAAAAABSACgAQFAEBQBAUAQxcE2eFR1ceONiuN2nNfjfY2zJwF+KtvhzkB19H0NhfN/cvR9DYXzf3OkoHJ0fQ2F839y9H0NhfN/c6T8Vqqpxc5Zkl/kB4OwWdK9wSS0ttpczkqSsUepS7uM/3OC2WydV580eqK0L7s5gNeE7E/wDzdvUkdcLDZ5K+MYtdqk2uZ86e1mtM6Tvi966nvA3uj6Gwvm/uTo+hsL5v7npZLRGrBSjua60+w9gOXo+hsL5v7jo+hsL5v7nWAMfC9lp06cXCKi3NK9X6MV/Y07Nq6fcjyOLDuqj8RfTI7bNq6fcjyA9ACgQAoEBSACgAQFAEBSAAUAQycBaa2+H9jXMnAWmtvh/YDVAKBDGw5WvlGmtCWM970f73myfPYW18/wBN3CgOMAAAAB34HrYtVR6pq57+pm8fMWPW0viQ5o+nAAoAzcO6qPxF9Mjts2rp9yPI4sO6qPxF9Mjts2rp9yPID0AKBACgQFIABQAIAAAAAAAUyMBaa2+HORrGTgLTW3w5yA1gAAMfDlC6Uai0NYr3rR/vcbB+K1KM4uMlemv8wPlQdNssU6Tzq+PVNaP+9jOYAAe1ms06ruis3XJ/hQHTgejjVcbqgr/+9RvHlZbPGlBRjvb62+09QAAAzsO6qPxF9Mjts2rp9yPI4sO6qPxF9Mjts2rp9yPID0AAAAAAAAKAABABQQAUEAFMnAWmtvhzkapk4C01t8P7AaxSAAU8LTaYUlfN3diWdvcY9pwrUnmh6kfd+L5gblScUvWcUvzNJGdWjYm87in+RyXIxpSbd7bb7W72QDYpwsSelPvORo0Zwaug43Lqi1cvkfLBO7Osz7UB9cQ+fs+E6sMzePHslp+ZsWS2U6q9V3S64vSvuB0ggAzsO6qPxF9Mjts2rp9yPI4sO6qPxF9Mjts2rp9yPID0KQACkAFIABQQAUEAFBABSAAUycBaa2+HORqmVgLTW3w5yA1Tlt9tVGPbN/hj/L9x7WisqcHOWhL5vqR81XqyqSc5aX+3uAlWrKbcpO9vrZ+AAAAAAAAWMmmmnc1nTWlEAG/g23+lWLK5VF4l27zvPkoScWmnc070+xn0titKqwUuvRJdkgOXDuqj8RfTI7bNq6fcjyOLDuqj8RfTI7bNq6fcjyA9CkAFIABSAAUEKAIABSAAAAAMrAWmtvhzkaplYC01t8OcgPxhyve401oXrS3vR/veZR7Wupj1Jy7ZO7d1HiAAAAAAAAAAAA78D18SrivRPN+rqOAsZOLTWlNNbwNvDuqj8RfTI7bNq6fcjyOHDcr6MGtDnF+GR3WbV0+5HkB6AAAAAAAAFIUCAoAgKQAAABk4E01/0f2NcwrPC00nPEh+Jq+9X6L7uv3gcmS1difCxktXYnws0sotuwuHzGUW32a4fMDNyWrsT4WMlq7E+FmllFt9muHzGUW32a4fMDNyWrsT4WMlq7E+FmllFt9muHzGUW3YXD5gZuS1difCxktXYnws0sotvs1w+Yyi2+zXD5gZuS1difCxktXYnws0sotvs1w+Yyi2+zXD5gZuS1difCxktXYnws0sotvs1w+Yyi27C4fMD84STyWjernfC9PSniM07Nq6fcjyMi1K1VYqM4Zk8bMrs9z9/vNigmoQTzNQinvuA/YBQIAAAKQAUACAoAgKAIAAAAAH4tFTEhKd1+LFu7Refs8MIamr3JcgKrSnSdRZ7oyeK8zTSzpnopq5NtK9LS7jit0HCNScFfGcHGpFdt2aa/kJwU76t1zpQ9G53Yv5kr+vQB3n4pzbV8kou+Suxk8y6zysCfo+tLGniJ6VDGeL+xy04p+hTV6yiveno/8AYGjjxzZ1n0Z1n3BySuTaTei96TNq0o+jtTxVfGTxc34fVTzdmdsttnF+lV0FJRuvlnqS9XM4r+QNGUkrr2lfovd14cks7aS7W7kZtZrGknc8alBNzjJ4unRcn/BZKKlD1oKn6JKEpxUoN3+t13J6ANIHjZIpQSTxle7ndcrr9CXYewAAoEAAAAAAAABQBAAAAAAAAAAAAAAXAAAAAFwAHjKz+s5RlKDldjYt2e5e9HpTpxjFRWhaOs/QAAAAAAAAAAAAAAABQBAAKQAAAABSAAAAAAAAAAAAAAAAAAAABSAAAAAAAoIAKCACggApAAKCAAUgAoIAKCACggApAAKCACggAFIAKCACggAoIAAAAoAAAAAQoAhQAIUACAACkAApCgAAABCgCFAAAACAoAAAD//Z"}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
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
                    <span>Ищу работу: </span><span>{props.profile.lookingForAJob ? " ДА!" : props.profile.lookingForAJobDescription} </span>
                </div>
            </div>
        </div>

    )
}
export default ProfileInfo;
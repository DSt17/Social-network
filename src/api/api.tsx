import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "4d2fa5a4-d1fc-41de-ad22-39a01f4bcde2"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    Follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    getUserProfile(userId: string) {
        console.warn("Obsolete method. Please profileAPI object")
        return ProfileAPI.getUserProfile(userId)

    }

}


export const ProfileAPI = {

    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }


}

export const authAPI = {
    me() {
        return instance.get('auth/me', {withCredentials: true})
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<loginResponseType>(`auth/login`, {email, password, rememberMe})
    }
}


type loginResponseType = {
    resultCode: number
    messages: [],
    data: {
        userId: number
    }
}




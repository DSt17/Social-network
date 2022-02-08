import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b9caa55f-2153-4537-a838-2bf91e83757f"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}




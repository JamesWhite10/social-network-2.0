import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1f8bceb1-8e01-4532-aa69-076eda261e41"
    },
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postSubscription(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteSubscription(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${+userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${+userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }
}

export const authAPI = {
    getHeader() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email: string,password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email: email,password: password, rememberMe: rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

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
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${+userId}`)
            .then(response => response.data)
    }
}

export const headerAPI = {
    getHeader() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const subscriptionPostAPI = {
    postSubscription(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const subscriptionDeleteAPI = {
    deleteSubscription(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}
import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '91c2fc47-8224-493c-9f29-47e2d3ef03a4'
    }

})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(res => res.data)
    },

    follow(userId: number) {
       return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})
    },
    unfollow(userId: number) {
       return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
}





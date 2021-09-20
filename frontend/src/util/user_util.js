import axios from 'axios'

export const getUsers = () => {
    return axios.get('/api/users')
};

export const getUser = userId => {
    return axios.get(`/api//user/${userId}`)
};

export const updateUser = (user) => {
    return axios.patch(`/api/users/update/${user.id}`, user)
}


import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_INSTRUCTORS = 'GET_INSTRUCTORS'

export const getUsers = () => (dispatch) => {
    return axios.get('http://localhost:3005/api/user')
    .then(res => {
        dispatch({type: GET_USERS, payload: res.data})
    })
    .catch(e => console.log(e))
}

export const getInstructors = () => (dispatch) => {
    return axios.get('http://localhost:3005/api/user/instructors')
    .then(res => {
        const instructors = res.data.slice(0, res.data.length - 1).map(inst => inst.users[0])
        dispatch({type: GET_INSTRUCTORS, payload: instructors })
    })
}
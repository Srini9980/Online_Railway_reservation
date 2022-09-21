import { deleteUser, fetchUserById, fetchUsers, modifyUser, saveUser, userLogin } from "../../service/UserService";
import { USER_ADD, USER_DELETE, USER_EDIT, USER_FETCH_ALL, USER_FETCH_BYID, LOGIN_SUCCESS } from "./ActionConstants";


export function getAllUsers() {

    return (dispatch) => {
        return fetchUsers().then (resp=> {
            dispatch(getAllUsersSuccess(resp.data));
        });
    }
}

export function getAllUsersSuccess(data) {
    return {
            type : USER_FETCH_ALL,
            payload : data
        }
}

export function getUserById(id) {
    return (dispatch) => {
        return fetchUserById(id).then(resp => {
            dispatch(getUserByIdSuccess(resp.data));
        })
    }
}

export function getUserByIdSuccess(data) {
    return {
            type : USER_FETCH_BYID,
            payload : data
        }
}

export function createNewUser(user) {
    return (dispatch) => {
        return saveUser(user).then(resp => {
            dispatch(createNewUserSuccess(resp.data));
        })
    }
}

export function createNewUserSuccess(data) {
    return {
            type : USER_ADD,
            payload : data
        }
}

export function updateUser(user) {
    return (dispatch) => {
        return modifyUser(user).then(resp => {
            dispatch(updateUserSuccess(resp.data));
        })
    }
}

export function updateUserSuccess(data) {
    return  {
            type : USER_EDIT,
            payload : data
        }
}

export function deleteUserDetails(id) {
    return (dispatch) => {
        return deleteUser(id).then (resp => {
            dispatch(deleteUserDetailsSuccess(resp.data));
        })
    }
}

export function deleteUserDetailsSuccess(data) {
    return {
        type : USER_DELETE,
        payload : data
    }
}

export function doUserLogin(payload) {
    return (dispatch) => {
        return userLogin(payload).then(resp => {
            localStorage.setItem("myUser",JSON.stringify(resp.data));
            dispatch(doUserLoginSuccess(resp.data));
        })

        .catch(error => {
            alert("Username or password are invalid")
        });
    }
    
}

export function doUserLoginSuccess(data) {
    return {
        type : LOGIN_SUCCESS,
        payload : data
    }
}
import { adminLogin, deleteAdmin, fetchAdminById, fetchAdmins, modifyAdmin, saveAdmin } from "../../service/AdminService"
import { ADMIN_ADD, ADMIN_DELETE, ADMIN_EDIT, ADMIN_FETCHALL, ADMIN_FETCHBYID, ADMIN_LOGINSUCCESS } from "./ActionConstants";


export function getAllAdmins() {

    return (dispatch) => {
        return fetchAdmins().then(resp => {
            dispatch(getAllAdminsSuccess(resp.data));
        });
    }
}

export function getAllAdminsSuccess(data) {
    return {
        type : ADMIN_FETCHALL,
        payload : data
    }
}

export function getAdminById(id) {

    return (dispatch) => {
        return fetchAdminById(id).then (resp => {
            dispatch(getAdminByIdSuccess(resp.data));
        });
    }
}

export function getAdminByIdSuccess(data) {
    return {
        type : ADMIN_FETCHBYID,
        payload : data
    }
}

export function createNewAdmin(admin) {

    return (dispatch) => {
        return saveAdmin(admin).then(resp => {
            dispatch(createNewAdminSuccess(resp.data));
        });
    }
}

export function createNewAdminSuccess(data) {
    return {
        type : ADMIN_ADD,
        payload: data
    }
}

export function updateAdmin(admin) {

    return (dispatch) => {
        return modifyAdmin(admin).then(resp => {
            dispatch(updateAdminSuccess(resp.data));
        });
    }
}

export function updateAdminSuccess(data) {
    return {
        type : ADMIN_EDIT,
        payload : data
    }
}

export function deleteAdminDetails(id) {

    return (dispatch) => {
        return deleteAdmin(id).then(resp => {
            dispatch(deleteAdminDetailsSuccess(resp.data));
        });
    }
}

export function deleteAdminDetailsSuccess(data) {
    return {
        type : ADMIN_DELETE,
        payload : data
    }
}

export function doAdminLogin(payload) {

    return (dispatch) => {
        return adminLogin(payload).then(resp => {
            localStorage.setItem("myAdminUser", JSON.stringify(resp.data));
            dispatch({
                type : ADMIN_LOGINSUCCESS,
                payload : resp.data
            });
        })

        .catch(error => {
            alert("Username or password is invalid")
        });
    }
}

export function doAdminLoginSuccess(data) {
    return {
        type : ADMIN_LOGINSUCCESS,
        payload : data
    }
}
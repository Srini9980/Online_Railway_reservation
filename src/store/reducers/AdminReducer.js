import { ADMIN_ADD, ADMIN_DELETE, ADMIN_EDIT, ADMIN_FETCHALL, ADMIN_FETCHBYID, ADMIN_LOGINSUCCESS } from "../actions/ActionConstants"


const initialState = {
    admins: [],
    admin: null,
    newAdmin: null,
    updateAdmin: null,
    deleteAdmin: null,
    loggedInAdmin : null
}

export default function adminReducer(state = initialState, action) {

    if (action.type === ADMIN_FETCHALL) {
        return ({
            ...state,
            admins: action.payload
        });
    }

    if (action.type === ADMIN_FETCHBYID) {
        return ({
            ...state,
            admin: action.payload
        });
    }

    if (action.type === ADMIN_ADD) {
        return ({
            ...state,
            newAdmin: action.payload
        });
    }

    if (action.type === ADMIN_EDIT) {
        return ({
            ...state,
            updateAdmin: action.payload
        });
    }

    if (action.type === ADMIN_DELETE) {
        return ({
            ...state,
            deleteAdmin: action.payload
        });
    }

    if(action.type === ADMIN_LOGINSUCCESS) {
        return ({
            ...state,
            loggedInAdmin : action.payload
        });
    }

    else {
        return state;
    }
}
import { LOGIN_SUCCESS, USER_ADD, USER_DELETE, USER_EDIT, USER_FETCH_ALL, USER_FETCH_BYID } from "../actions/ActionConstants";

const initialState = {
    users : [],
    user : null,
    newUser : null,
    updateUser : null,
    deleteUser : null,
    loggedInUser : null
}

export default function userReducer(state = initialState, action) {

    if(action.type === USER_FETCH_ALL) {
        return ({
            ...state,
            users : action.payload
        });
    }

    if(action.type === USER_FETCH_BYID) {
        return ({
            ...state,
            user : action.payload
        });
    }

    if(action.type === USER_ADD) {
        return ({
            ...state,
            newUser : action.payload
        });
    }

    if(action.type === USER_EDIT) {
        return ({
            ...state,
            updateUser : action.payload
        });
    }

    if(action.type === USER_DELETE) {
        return ({
            ...state,
            deleteUser : action.payload
        });
    }

    if(action.type === LOGIN_SUCCESS) {
        console.log(action.payload);
        console.log(action.type)
        return ({
            ...state,
            loggedInUser : action.payload
        });
    }

    else {
        return state;
    }
}


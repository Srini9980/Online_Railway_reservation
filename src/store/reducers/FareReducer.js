import { FARE_ADD, FARE_DELETE, FARE_EDIT, FARE_FETCHALL, FARE_FETCHBYID } from "../actions/ActionConstants"

const initialState = {
    fares: [],
    fare: null,
    newFare: null,
    updateFare: null,
    deleteFare: null
}

export default function fareReducer(state = initialState, action) {

    if (action.type === FARE_FETCHALL) {
        return ({
            ...state,
            fares: action.payload
        });
    }

    if (action.type === FARE_FETCHBYID) {
        return ({
            ...state,
            fare: action.payload
        });
    }

    if (action.type === FARE_ADD) {
        return ({
            ...state,
            newFare: action.payload
        });
    }

    if (action.type === FARE_EDIT) {
        return ({
            ...state,
            updateFare: action.payload
        });
    }

    if (action.type === FARE_DELETE) {
        return ({
            ...state,
            deleteFare: action.payload
        });
    }

    else {
        return state;
    }
}
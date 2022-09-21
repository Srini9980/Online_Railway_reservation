import { BOOKING_ADD, BOOKING_DELETE, BOOKING_FETCHALL, BOOKING_FETCH_BYID } from "../actions/ActionConstants"


const initialState = {
    bookings : [],
    booking : null,
    newBooking : null,
    deleteBooking : null
}

export default function bookingReducer(state = initialState, action) {

    if(action.type === BOOKING_FETCHALL){
        return ({
            ...state,
            bookings : action.payload
        });
    }

    if(action.type === BOOKING_FETCH_BYID) {
        return ({
            ...state,
            booking : action.payload
        });
    }

    if(action.type === BOOKING_ADD) {
        return ({
            ...state,
            newBooking : action.payload
        });
    }

    if(action.type === BOOKING_DELETE) {
        return({
        ...state,
        deleteBooking : action.payload
        });
    }

    else {
        return state;
    }
}
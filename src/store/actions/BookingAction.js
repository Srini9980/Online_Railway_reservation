import { deleteBooking, fetchBooking, fetchBookingById, saveBooking } from "../../service/BookingService"
import { BOOKING_ADD, BOOKING_DELETE, BOOKING_FETCHALL, BOOKING_FETCH_BYID } from "./ActionConstants";


export function getAllBookings() {

    return (dispatch) => {
        return fetchBooking().then(resp => {
            dispatch(getAllBookingsSuccess(resp.data));
        });
    }
}

export function getAllBookingsSuccess(data) {
    return {
        type : BOOKING_FETCHALL,
        payload : data
    }
}

export function getBookingById(id) {

    return (dispatch) => {
        return fetchBookingById(id).then(resp => {
            dispatch(getBookingByIdSuccess(resp.data));
        });
    }
}

export function getBookingByIdSuccess(data) {
    return {
        type : BOOKING_FETCH_BYID,
        payload : data
    }
}

export function createBooking(booking) {

    return (dispatch) => {
        return saveBooking(booking).then(resp => {
            dispatch(createBookingSuccess(resp.data));
        });
    }
}

export function createBookingSuccess(data) {
    return {
        type : BOOKING_ADD,
        payload : data
    }
}

export function cancelBooking(id) {

    return (dispatch) => {
        return deleteBooking(id).then(resp => {
            dispatch(cancelBookingSuccess(resp.data));
        });
    }
}

export function cancelBookingSuccess(data) {
    return {
        type : BOOKING_DELETE,
        payload : data
    }
}
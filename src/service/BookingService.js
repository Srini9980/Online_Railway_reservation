import Axios from 'axios';
import { BASE_URL } from '../store/actions/ActionConstants';

export function fetchBooking() {
    return Axios.get(BASE_URL + "/booking/all");
}

export function fetchBookingById(id) {
    return Axios.get(BASE_URL + "/booking/find/" + id);
}

export function saveBooking(booking) {
    return Axios.post("http://localhost:8084/booking/save", booking);
}

export function deleteBooking(id) {
    return Axios.delete("http://localhost:8084/booking/delete/" + id);
}
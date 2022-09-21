import Axios from 'axios';
import { BASE_URL } from '../store/actions/ActionConstants';

export function fetchFare() {
    return Axios.get(BASE_URL + "/fare/all");
}

export function fetchFareById(id) {
    return Axios.get(BASE_URL + "/fare/find/" + id);
}

export function saveFare(fare) {
    return Axios.post("http://localhost:8085/fare/save",fare);
}

export function modifyFare(fare) {
    return Axios.put("http://localhost:8085/fare/modify", fare);
}

export function deleteFare(id) {
    return Axios.delete("http://localhost:8-85/fare/delete/" + id)
}
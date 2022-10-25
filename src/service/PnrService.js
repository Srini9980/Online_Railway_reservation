import Axios from 'axios';
import { BASE_URL } from '../store/actions/ActionConstants';

export function fetchPnrById(id) {
    return Axios.get(BASE_URL + "/pnr/pnrById/" + id);
}

export function savePnr(pnr) {
    return Axios.post("http://localhost:8086/pnr/save", pnr);
}

export function fetchAllPnr() {
    return Axios.get(BASE_URL + "/pnr/all");
}

export function deletePnr(id) {
    return Axios.delete("http://localhost:8086/pnr/delete/" + id);
}
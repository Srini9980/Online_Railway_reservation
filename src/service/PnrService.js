import Axios from 'axios';
import { BASE_URL } from '../store/actions/ActionConstants';

export function fetchPnrById(id) {
    return Axios.get(BASE_URL + "/pnr/byid/" + id);
}

export function savePnr(pnr) {
    return Axios.post("http://localhost:8086/pnr/save", pnr);
}
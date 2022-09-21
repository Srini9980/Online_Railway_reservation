import Axios from 'axios';
import { BASE_URL } from '../store/actions/ActionConstants';

export function fetchAdmins() {
    return Axios.get(BASE_URL + "/admin/all");
}

export function fetchAdminById(id) {
    return Axios.get(BASE_URL + "admin/find/" + id);
}

export function saveAdmin(admin) {
    return Axios.post("http://localhost:8081/admin/add", admin);
}

export function modifyAdmin(admin) {
    return Axios.put("http://localhost:8081/admin/update", admin);
}

export function deleteAdmin(id) {
    return Axios.delete("http://localhost:8081/admin/delete/" + id);
}

export function adminLogin(payload) {
    return Axios.post("http://localhost:8081/admin/login", payload);
}
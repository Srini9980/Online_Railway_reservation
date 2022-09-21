import Axios from 'axios';
import { BASE_URL } from '../store/actions/ActionConstants';

export function fetchUsers() {
    return Axios.get(BASE_URL +"/user/all");
}

export function fetchUserById(id) {
    return Axios.get(BASE_URL + "/user/find/" + id);
}

export function saveUser(user) {
    return Axios.post("http://localhost:8081/user/add", user);
}

export function modifyUser(user) {
    return Axios.put("http://localhost:8081/user/update", user)
}

export function deleteUser(id) {
    return Axios.delete("http://localhost:8081/user/delete/" + id);
}

export function userLogin(payload) {
    return Axios.post("http://localhost:8082/authenticate", payload);
}
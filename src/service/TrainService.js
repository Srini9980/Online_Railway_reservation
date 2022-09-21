import Axios from 'axios';
import { BASE_URL } from '../store/actions/ActionConstants';

export function fetchTrains() {
    return Axios.get(BASE_URL + "/train/all");
}

export function fetTrainById(id) {
    return Axios.get(BASE_URL + "/train/find/" + id );
}

export function fetchTrainByfare(id) {
    return Axios.get(BASE_URL + "/fare/find/" + id );
}

export function searchTrain(source, destination) {
    return Axios.get(BASE_URL + "/train/byroute/" + source + "/" + destination);
}

export function saveTrain(train) {
    return Axios.post("http://localhost:8083/train/add", train);
}

export function modifyTrain(train) {
    return Axios.put("http://localhost:8083/train/update", train);
}

export function deleteTrain(id) {
    return Axios.delete("http://localhost:8083/train/delete/" + id);
}
import { deleteTrain, fetchTrainByfare, fetchTrains, fetTrainById, modifyTrain, saveTrain, searchTrain } from "../../service/TrainService";
import { TRAIN_ADD, TRAIN_BYROUTE, TRAIN_DELETE, TRAIN_EDIT, TRAIN_FETCHALL, TRAIN_FETCH_BYFARE, TRAIN_FETCH_BYID } from "./ActionConstants";

export function getAllTrains() {

    return (dispatch) => {
        return fetchTrains().then(resp => {
            dispatch(getAllTrainsSuccess(resp.data));
        });
    }
}

export function getAllTrainsSuccess(data) {
    return {
            type : TRAIN_FETCHALL,
            payload: data
        }
}

export function getTrainById(id) {

    return (dispatch) => {
        return fetTrainById(id).then(resp => {
            dispatch(getTrainByIdSuccess(resp.data));
        });
    }
}

export function getTrainByIdSuccess(data) {
    return {
        type : TRAIN_FETCH_BYID,
        payload  : data
    }
}

export function getTrainByFare(id) {
    return (dispatch) => {
        return fetchTrainByfare(id).then(resp => {
            dispatch(getTrainByFareSuccess(resp.data));
        });
    }
}

export function getTrainByFareSuccess(data) {
    return {
        type : TRAIN_FETCH_BYFARE,
        payload : data
    }
}

export function getTrainByRoute(source, destination) {
    return (dispatch) => {
        return searchTrain(source, destination).then(resp => {
            dispatch(getTrainByRouteSuccess(resp.data));
        });
    }
}

export function getTrainByRouteSuccess(data) {
    return {
        type : TRAIN_BYROUTE,
        payload : data
    }
}

export function createNewTrain(train) {

    return (dispatch) =>{
        return saveTrain(train).then(resp => {
            dispatch(createNewTrainSuccess(resp.data));
        });
    }
}

export function createNewTrainSuccess(data) {
    return {
        type : TRAIN_ADD,
        payload : data
    }
}

export function updateTrain(train) {

    return (dispatch) => {
        return modifyTrain(train).then(resp => {
            dispatch(updateTrainSuccess(resp.data));
        });
    }
}

export function updateTrainSuccess(data) {
    return {
        type : TRAIN_EDIT,
        payload : data
    }
}

export function deleteTrainDetails(id) {

    return (dispatch) => {
        return deleteTrain(id).then(resp => {
            dispatch(deleteTrainDetailsSuccess(resp.data));
        });
    }
}

export function deleteTrainDetailsSuccess(data) {
    return {
        type : TRAIN_DELETE,
        payload : data
    }
}
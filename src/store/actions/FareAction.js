import { deleteFare, fetchFare, fetchFareById, modifyFare, saveFare } from "../../service/FareService"
import { FARE_ADD, FARE_DELETE, FARE_EDIT, FARE_FETCHALL, FARE_FETCHBYID } from "./ActionConstants";


export function getAllFare() {

    return (dispatch) => {
        return fetchFare().then(resp => {
            dispatch(getAllFareSuccess(resp.data));
        });
    }
}

export function getAllFareSuccess(data) {
    return {
        type : FARE_FETCHALL,
        payload : data
    }
}

export function getFareById(id) {

    return (dispatch) => {
        return fetchFareById(id).then(resp => {
            dispatch(getFareByIdSuccess(resp.data));
        });
    }
}

export function getFareByIdSuccess(data) {
    return {
        type : FARE_FETCHBYID,
        payload : data
    }
}

export function createNewFare(fare) {

    return (dispatch) => {
        return saveFare(fare).then(resp =>{
            dispatch(createNewFareSuccess(resp.data));
        });
    }
}

export function createNewFareSuccess(data) {
    return {
        type : FARE_ADD,
        payload : data
    }
}

export function updateFare(fare) {

    return (dispatch) => {
        return modifyFare(fare).then(resp => {
            dispatch(updateFareSuccess(resp.data));
        });
    }
}

export function updateFareSuccess(data) {
    return {
        type : FARE_EDIT,
        payload : data
    }
}

export function deleteFareDetails(id) {

    return (dispatch) => {
        return deleteFare(id).then(resp => {
            dispatch(deleteFareDetailsSuccess(resp.data));
        });
    }
}

export function deleteFareDetailsSuccess(data) {
    return {
        type : FARE_DELETE,
        payload : data
    }
}
import { deletePnr, fetchAllPnr, fetchPnrById, savePnr } from "../../service/PnrService";
import { PNR_ADD, PNR_DELETE, PNR_FETCHALL, PNR_FETCHBY_ID } from "./ActionConstants";

export function getPnrById(id) {

    return (dispatch) => {
        return fetchPnrById(id).then(resp => {
            dispatch(getPnrByIdSuccess(resp.data));
        });
    }
}

export function getPnrByIdSuccess(data) {
    return {
        type : PNR_FETCHBY_ID,
        payload : data
    }
}

export function createPnr(pnr) {

    return (dispatch) => {
        return savePnr(pnr).then(resp => {
            dispatch(createPnrSuccess(resp.data));
        });
    }
}

export function createPnrSuccess(data) {
    return {
        type : PNR_ADD,
        payload : data
    }
}

export function getAllPnr() {

    return (dispatch) => {
        return fetchAllPnr().then(resp => {
            dispatch(getAllPnrSuccess(resp.data));
        });
    }
} 

export function getAllPnrSuccess(data) {
    return {
        type : PNR_FETCHALL,
        payload : data
    }
}

export function deletePnrDetails(id) {

    return (dispatch) => {
        return (deletePnr(id)).then(resp => {
            dispatch(deletePnrDetailsSuccess(resp.data));
        });
    }
}

export function deletePnrDetailsSuccess(data) {
    return {
        type : PNR_DELETE,
        payload : data
    }
}
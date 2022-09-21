import { fetchPnrById, savePnr } from "../../service/PnrService";
import { PNR_ADD, PNR_FETCHBY_ID } from "./ActionConstants";

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
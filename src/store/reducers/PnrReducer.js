import { PNR_ADD, PNR_DELETE, PNR_FETCHALL, PNR_FETCHBY_ID } from "../actions/ActionConstants";

const initialState = {
    pnrById : null,
    newPnr : null,
    pnrs : [],
    deletePnr : null
}

export default function pnrReducer(state = initialState, action) {

    if(action.type === PNR_FETCHBY_ID) {
        return ({
            ...state,
            pnrById : action.payload
        });
    }

    if(action.type === PNR_ADD) {
        return ({
            ...state,
            newPnr : action.payload
        });
    }

    if(action.type === PNR_FETCHALL) {
        return ({
            ...state,
            pnrs : action.payload
        });
    }

    if(action.type === PNR_DELETE) {
        return ({
            ...state,
            deletePnr : action.payload
        })
    }

    else {
        return state;
    }
}
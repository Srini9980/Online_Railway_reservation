import { PNR_ADD, PNR_FETCHBY_ID } from "../actions/ActionConstants";

const initialState = {
    pnrById : null,
    newPnr : null
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

    else {
        return state;
    }
}
import { TRAIN_ADD, TRAIN_BYROUTE, TRAIN_DELETE, TRAIN_EDIT, TRAIN_FETCHALL, TRAIN_FETCH_BYFARE, TRAIN_FETCH_BYID } from "../actions/ActionConstants"

const initialState = {
    trains : [],
    train : null,
    fare : null,
    trainByRoute : null,
    newTrain : null,
    updateTrain : null,
    deleteTrain : null
}

export default function trainReducer(state = initialState, action) {

    if(action.type === TRAIN_FETCHALL) {
        return ({
            ...state,
            trains : action.payload
        });
    }

    if(action.type === TRAIN_FETCH_BYID) {
        return ({
            ...state,
            train : action.payload
        })
    }

    if(action.type === TRAIN_FETCH_BYFARE) {
        return ({
            ...state,
            fare : action.payload
        })
    }

    if(action.type === TRAIN_BYROUTE) {
        return ({
            ...state,
            trainByRoute : action.payload
        })
    }

    if(action.type === TRAIN_ADD) {
        return ({
            ...state,
            newTrain : action.payload
        });
    }

    if(action.type === TRAIN_EDIT) {
        return ({
            ...state,
            updateTrain : action.payload
        });
    }

    if(action.type === TRAIN_DELETE) {
        return ({
            ...state,
            deleteTrain : action.payload
        })
    }

    else {
        return state;
    }
}
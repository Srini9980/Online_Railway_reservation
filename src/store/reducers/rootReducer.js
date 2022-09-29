import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import trainReducer from './TrainReducer';
import bookingReducer from './BookingReducer'
import pnrReducer from './PnrReducer';
import fareReducer from './FareReducer';

const rootReducer = combineReducers ({
    userReducer,
    trainReducer,
    bookingReducer,
    pnrReducer,
    fareReducer,

});

export default rootReducer;
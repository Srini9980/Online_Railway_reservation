import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import trainReducer from './TrainReducer';
import bookingReducer from './BookingReducer'
import pnrReducer from './PnrReducer';
import adminReducer from './AdminReducer';
import fareReducer from './FareReducer';

const rootReducer = combineReducers ({
    userReducer,
    trainReducer,
    bookingReducer,
    pnrReducer,
    adminReducer,
    fareReducer,

});

export default rootReducer;
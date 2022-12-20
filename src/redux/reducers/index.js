import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import charity from './charity';
import payment from './payment'

export default combineReducers({
    auth,
    message,
    charity,
    payment
});

import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import charity from './charity';
import payment from './payment';
import donate from './donate'

export default combineReducers({
    auth,
    message,
    charity,
    payment,
    donate
});

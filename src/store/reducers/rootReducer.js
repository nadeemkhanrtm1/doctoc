import authReducer from './authReducer';
import profileReducer from './profileReducer';
import medDataReducer from './medDataReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth : authReducer,
    medData: medDataReducer,
    profile: profileReducer
})

export default rootReducer;
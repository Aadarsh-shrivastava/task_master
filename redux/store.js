import {combineReducers, createStore} from 'redux';
import taskReducer from './reducers/TaskReducer';

const rootReducer = combineReducers({tasks: taskReducer});

const store = createStore(rootReducer);

export default store;

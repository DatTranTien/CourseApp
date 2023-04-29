import { createStore, combineReducers } from 'redux';
import changeReducer from './Reducer';
const rootReducer = combineReducers(
{ Lession: changeReducer }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;
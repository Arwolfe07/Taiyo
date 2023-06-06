import { combineReducers } from "redux";
import { contactReducer } from './contactReducer';

export const allReducer = combineReducers({
    contacts: contactReducer
});
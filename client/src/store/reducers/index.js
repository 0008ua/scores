import { combineReducers } from "redux";
import { authReducer } from './auth.reducer';
import { storeDataReducers } from '../entities/store-data-config';

export const APP_ERROR = 'application/error';

export const appError = (payload) => {
  return {
    type: APP_ERROR,
    payload,
  }
}

const appErrorReducer = (state = { error: null }, action) => {
  switch (action.type) {
    case APP_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
}

export const rootReducer = combineReducers({
  auth: authReducer,
  // gamer: gamerReducer,
  appError: appErrorReducer,
  ...storeDataReducers,
});

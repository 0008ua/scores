import { AUTH_ERROR, STORE_TOKEN_SUCCESS, STORE_USER_FROM_TOKEN_SUCCESS } from "../actions/auth.actions";
// import {reducers} from './entity-config';
import { createDraftSafeSelector } from '@reduxjs/toolkit'

const initialState = {
  auth: {
    token: null,
    user: null,
    error: null,
  }
}

export const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case STORE_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      }
    case STORE_USER_FROM_TOKEN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
}
const selectSelf = (state) => state;
export const userSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.auth.user
);

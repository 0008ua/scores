export const STORE_TOKEN = 'auth/storeToken';
export const STORE_TOKEN_SUCCESS = 'auth/storeTokenSuccess';

export const STORE_USER_FROM_TOKEN = 'auth/storeUserFromToken';
export const STORE_USER_FROM_TOKEN_SUCCESS = 'auth/storeUserFromTokenSuccess';

export const SIGNIN = 'auth/signin';
export const SIGNUP = 'auth/signup';

export const LOGOUT = 'auth/signup';

export const AUTH_ERROR = 'auth/authError';

export const storeToken = (token) => {
  return {
    type: STORE_TOKEN,
    payload: token,
  }
}

export const storeTokenSuccess = (token) => {
  return {
    type: STORE_TOKEN_SUCCESS,
    payload: token,
  }
}

export const storeUserFromToken = () => {
  return {
    type: STORE_USER_FROM_TOKEN,
  }
}

export const storeUserFromTokenSuccess = (user) => {
  return {
    type: STORE_USER_FROM_TOKEN_SUCCESS,
    payload: user,
  }
}

export const signin = (user) => {
  return {
    type: SIGNIN,
    payload: user,
  }
}

export const signup = (user) => {
  return {
    type: SIGNUP,
    payload: user,
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const authError = (payload) => {
  return {
    type: AUTH_ERROR,
    payload,
  }
}

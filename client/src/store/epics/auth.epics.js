import { ofType } from 'redux-observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import {
  authError, storeToken, storeTokenSuccess, storeUserFromToken, storeUserFromTokenSuccess,
  STORE_TOKEN, SIGNIN, SIGNUP, STORE_USER_FROM_TOKEN, LOGOUT
} from '../actions/auth.actions';
import { authService, helpersService } from '../../services/container';
import { storeDataActions } from '../entities/store-data-config';

const recentGamerActions = storeDataActions['recentGamer'];

const signinEpic = (action$) => action$.pipe(
  ofType(SIGNIN),
  map((action) => action.payload),
  switchMap((user) => authService.signin(user).pipe(
    switchMap((token) => [storeToken(token), recentGamerActions.removeAll()]),
    catchError((err) => [authError(err)])
  )),
);

const signupEpic = (action$) => action$.pipe(
  ofType(SIGNUP, LOGOUT),
  map((action) => action.payload),
  switchMap((user) => authService.signup(user).pipe(
    switchMap((token) => [storeToken(token), recentGamerActions.removeAll()]),
    catchError((err) => [authError(err)])
  )),
);

const storeTokenEpic = (action$) => action$.pipe(
  ofType(STORE_TOKEN),
  map((action) => action.payload),
  switchMap((payload) => {
    return of(payload).pipe(
      switchMap((token) => {
        helpersService.storeToken(token);
        return [storeTokenSuccess(token), storeUserFromToken()]
      }),
      catchError((err) => [authError(err)])
    );
  })
);

const storeUserFromTokenEpic = (action$) => action$.pipe(
  ofType(STORE_USER_FROM_TOKEN),
  switchMap(() => {
    return of('_').pipe(
      switchMap(() => {
        let user;
        try {
          user = helpersService.decodeToken();
        } catch (error) {
          return throwError(() => error);
        }
        return [storeUserFromTokenSuccess(user)];
      }),
      catchError((err) => [authError(err)])
    );
  })
);

const authEpics = { signinEpic, signupEpic, storeTokenEpic, storeUserFromTokenEpic };

export default authEpics;
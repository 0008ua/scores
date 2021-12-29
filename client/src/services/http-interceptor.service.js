import { throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { httpClientService } from './container';
import { store } from '../store';
import { storeToken } from '../store/actions/auth.actions';

let tries = 0;
export default function httpInterceptor(stream) {
  return stream.pipe(
    catchError((error) => {
      // not authenticated (new user without token, wrong token, try to reach protected route)
      // exclude wrong credentials on login
      if (error.status === 401 && error.badRequest.url !== '/api/auth/signin') {
        if (tries > 0) {
          // get protected resource limit exceeded
          tries = 0;
          return throwError(() => error);
        }
        // first try to get protected resource fail
        // bad token or new guest user without token
        // try to get valid guest token
        return httpClientService.fetch('/api/auth/signup', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' }
        }).pipe(
          catchError((err) => {
            // error get valid guest token
            // forward error
            return throwError(() => err);
          }),
          switchMap((newToken) => {
            // successeful get valid guest token
            // save new token to store
            store.dispatch(storeToken(newToken));
            tries++;
            // second try to get protected resource
            const { url, options } = error.badRequest;
            options.headers['Authorization'] = newToken;
            return httpClientService.fetch(url, options)
          }),
        );
      }
      tries = 0;
      // forward error
      return throwError(() => error);
    }),
  );
}

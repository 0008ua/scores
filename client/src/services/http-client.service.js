import { from, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export default class HttpClientService {
  constructor(interceptors) {
    this.interceptors = interceptors;
  }

  fetch(url, options) {
    let isError = false;
    let badRequest;
    
    if (options.queryParams) {
      url = `${url}?${new URLSearchParams(options.queryParams)}`;
    }
    delete options.queryParams;

    let fetch$ = from(fetch(url, options)).pipe(
      switchMap((response) => {
        if (!response.ok) {
          isError = true;
          // save request data
          badRequest = { url, options }
        }
        return from(response.json());
      }),
      switchMap((data) => {
        if (isError) {
          // append request data to error
          const errorObject = Object.assign(new Error(), data, { badRequest });
          // forward error
          return throwError(() => errorObject);
        }
        return of(data);
      }),
    )

    // consistently add interceptors to the stream
    return this.interceptors.reduce((prev, cur) => {
      return cur(prev);
    }, fetch$)
  }
}

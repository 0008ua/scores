export default class HttpService {
  constructor(httpClientService, helpersService) {
    this.helpersService = helpersService;
    this.httpClientService = httpClientService;
  }

  _headers(headers = {}) {
    headers['Content-Type'] = 'application/json';
    headers['Authorization'] = this.helpersService.getToken();
    return headers;
  }

  _body(body = null) {
    if (body) {
      body = JSON.stringify(body);
    }
    return body;
  }

  get(url, { headers = {}, queryParams } = {}) {
    headers = this._headers(headers);
    return this.httpClientService.fetch(url, { method: 'get', headers, queryParams });
  }

  post(url, { headers = {}, body = {}, queryParams } = {}) {
    headers = this._headers(headers);
    body = this._body(body);
    return this.httpClientService.fetch(url, { method: 'post', headers, body, queryParams });
  }

  put(url, { headers = {}, body = {}, queryParams } = {}) {
    headers = this._headers(headers);
    body = this._body(body);
    return this.httpClientService.fetch(url, { method: 'put', headers, body, queryParams });
  }

  patch(url, { headers = {}, body = {}, queryParams } = {}) {
    headers = this._headers(headers);
    body = this._body(body);
    return this.httpClientService.fetch(url, { method: 'patch', headers, body, queryParams });
  }

  delete(url, { headers = {}, body = {}, queryParams } = {}) {
    headers = this._headers(headers);
    body = this._body(body);
    return this.httpClientService.fetch(url, { method: 'delete', headers, body, queryParams });
  }
}

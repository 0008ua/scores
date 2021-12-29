import HttpService from './http.service';
import AuthService from './auth.service';
import HttpClientService from './http-client.service';
import httpInterceptor from './http-interceptor.service';
import HelpersService from './helpers.service';
import jwtDecode from "jwt-decode";

export default class Container {
  static storage = new Map();

  static inject(InjectedClass, deps = []) {
    let instance = this.storage.get(InjectedClass);
    if (instance) {
      return instance;
    }
    instance = new InjectedClass(...deps);
    this.storage.set(InjectedClass, instance);
    return instance;
  }
}

export const helpersService = Container.inject(HelpersService, [jwtDecode]);
export const httpClientService = Container.inject(HttpClientService, [[httpInterceptor]]);
export const httpService = Container.inject(HttpService, [httpClientService, helpersService]);
export const authService = Container.inject(AuthService, [httpService]);

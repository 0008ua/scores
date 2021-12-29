export default class HelpersService {
  constructor(jwtDecode) {
    this.jwtDecode = jwtDecode;
  }

  storeToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  decodeToken() {
    return this.jwtDecode(this.getToken());
  }
}
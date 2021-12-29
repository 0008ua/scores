export default class AuthService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  signin(user) {
    // localStorage.removeItem('persistStorage');
    // console.log('local signin', localStorage.getItem('persistStorage'))
    return this.httpService.post('/api/auth/signin', {body: user});
  }

  signup(user) {
    // localStorage.removeItem('persistStorage');
    // console.log('local signup', localStorage.getItem('persistStorage'))

    return this.httpService.post('/api/auth/signup', { body: user });
  }

}
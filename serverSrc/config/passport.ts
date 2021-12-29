import passport from 'passport';
import passportLocal from 'passport-local';
import passportJwt, { ExtractJwt } from 'passport-jwt';
import { UserModel } from '../models';
import config from './';
import { IUser } from '../interfaces';
import winston from '../config/winston';
const log = winston(module);

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;

passport.use('local', new LocalStrategy({
  usernameField: 'name',
  passwordField: 'password',
},
(name, password, done) => {
  const userCandidate = {
    name,
    password,
  };
  UserModel.isNameExists(userCandidate.name)
  // if password doesn't match then throw error with code 'wrongCredentials' here
    .then((userFromDb) => UserModel.isPasswordMatched(userCandidate.password, userFromDb))// userFromDb._doc.password))
    .then((userFromDb) => done(null, userFromDb))
    .catch((err) => done(err, false));
}));

passport.use('localAnonymous', new LocalStrategy({
  usernameField: 'name',
  passwordField: 'name',
},
(name, password, done) => {
  UserModel.isNameExists(name)
    .then((userFromDb) => {
      done(null, userFromDb);
    })
    .catch((err) => done(err, false));
},
));

const jwtOptions: passportJwt.StrategyOptions = {} as passportJwt.StrategyOptions;
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = config.get('JWT_SECRET');
passport.use('jwt', new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  // на основі _id (витягнутого з токена) робить пошук
  // в базі, чи є такий юзер, і ф-я done повертає відповідь
  UserModel.findOne({ _id: jwtPayload._id })
    .then((user) => {
      // check version of user token equal version in db
      // if not (credentials changed, ..) need to reauth using refresh token or name/pass
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch((err) => {
      done(err, false);
    });
},
));

// name user after creation or change credentials
// without password
passport.use('localWithoutPassword', new LocalStrategy(
  {
    usernameField: 'name',
    passwordField: 'password',

  },
  (name, password, done) => {
    UserModel.isNameExists(name)
      .then((userFromDb) => {
        done(null, userFromDb);
      })
      .catch((err) => done(err, false));
  },
));


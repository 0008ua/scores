import React, { useState } from 'react';
import Btn from '../ui/button/Btn';
import Inp from '../ui/input/Inp';
import { useDispatch } from 'react-redux';
import { signup } from '../store/actions/auth.actions';
import { Link } from "react-router-dom";

export default function SignupComponent() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch();

  const authHandler = (e) => {
    e.preventDefault();
    dispatch(signup({ name: name, password: password }));
    console.log('auth')
  }

  return (
    <div className="container auth">
      <div className="row auth-header">
        <h2 className="cell auth-header__head">Signup</h2>
        <span className="cell auth-header__link">
          <Link to="/auth">or signin</Link>
        </span>
      </div>
      <form className="row auth-form">
        <div className="auth-form__input">
          <label htmlFor="name"
            className="input-label">Name</label>
          <Inp id="name"
            placeholder="Name"
            type="text" value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="auth-form__input">
          <label htmlFor="password"
            className="input-label">Password</label>
          <Inp id="password"
            placeholder="Password"
            type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="auth-form__input">
          <label htmlFor="passwordConfirm"
            className="input-label">Confirm password</label>
          <Inp id="passwordConfirm"
            placeholder="Confirm password"
            type="password" value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)} />
        </div>
        <div className="auth-form__button">
          <Btn color="primary" type="button"
            onClick={authHandler}
            disabled={passwordConfirm !== password}
          > Signup</Btn>
        </div>
      </form >
    </div>
  )
}


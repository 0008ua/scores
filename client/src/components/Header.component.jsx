import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import Btn from '../ui/button/Btn';

import { storeUserFromToken, logout } from '../store/actions/auth.actions';
// import { storeDataActions, storeDataSelectors } from '../store/entities/store-data-config';

import { userSelector } from '../store/reducers/auth.reducer';

// import { gamerSelectors, gamerActions } from '../store/entities/gamer';

import { useBrakepoint } from '../hooks/useBrakepoint';

import {
  faBars, faBarsStaggered, faHatCowboySide, faRightFromBracket,
  faTrain, faUserAstronaut, faGears, faDoorClosed
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderComponent() {
  const [showSideMenu, setshowSideMenu] = useState(false);
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  // const gamerSelectors = storeDataSelectors.gamer;
  // const gamerSelectAll = useSelector(gamerSelectors.selectAll);
  // const gamerActions = storeDataActions.gamer;

  const { size } = useBrakepoint();


  // useEffect(() => {
  //   console.log('size', size);
  // }, [size]);

  useEffect(() => {
    dispatch(storeUserFromToken());
    // dispatch({ type: 'gamer/addOne', payload: { _id: '12345', name: 'johns' } })
    // dispatch(gamerActions.addOne({ _id: '125', name: 'jos' }));
    // dispatch(gamerActions.getById('12345'));
    // console.log('gamersSelector', gamerSelectAll)

    // gamersSelectors.selectAll((x) => {
    //   console.log('gamersSelectors', x);

    // }
    // );
    // dispatch(actions.opponent.getOpponents());
    // dispatch(actions.opponent.getOpponent('fsdfsdf'))

  }, [dispatch])

  // useEffect(() => {
  //   console.log('gamersSelector', gamerSelectAll)
  // }, [dispatch, gamerSelectAll])

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  }

  const menuSideHandler = (e) => {
    e.preventDefault();
    setshowSideMenu((prev) => !prev)
  }

  return (
    <header className="container header">
      <div className="header__logo">
        <NavLink className="menu__item menu-item" end to="/" >
          {/* <FontAwesomeIcon className="menu-item__icon" icon={faTrain} /> */}

          <span>Scores</span>
        </NavLink></div>
      {(size === 'md' || size === 'lg' || size === 'xl')
        && <div className="header__menu top-menu">
          <div className="top-menu__links">
            <NavLink className="top-menu__item menu-item" end to="/games/train" >
              <FontAwesomeIcon className="menu-item__icon" icon={faTrain} />
              <span>Train</span>
            </NavLink>
            <NavLink className="top-menu__item menu-item" end to="/games/thousand" >
              <FontAwesomeIcon className="menu-item__icon" icon={faHatCowboySide} />
              <span>Card Game</span>
            </NavLink>
          </div>
          <div className="top-menu__divider"></div>
          <div className="top-menu__dashboard">
            {user && user.role && user.role === 'member' &&
              <span className="top-menu__item menu-item">
                <FontAwesomeIcon className="menu-item__icon" icon={faUserAstronaut} />
                {user.name}</span>
            }

            {/* <NavLink className="top-menu__item menu-item" end to="/dashboard" >
              <FontAwesomeIcon className="menu-item__icon" icon={faGears} />
              <span>Dashboard</span>
            </NavLink> */}


            {user && user.role !== 'member' &&
              <NavLink className="top-menu__item menu-item" end to="/auth" >
                <FontAwesomeIcon className="menu-item__icon" icon={faDoorClosed} />
                <span>Signin</span>
              </NavLink>
            }

            {user && user.role === 'member' &&
              <Btn className="anchor top-menu__item menu-item" type="button" onClick={logoutHandler}>
                <FontAwesomeIcon className="menu-item__icon" icon={faRightFromBracket} />
                <span>Logout</span>
              </Btn>
            }
          </div>
        </div>}

      {(size === 'xs' || size === 'sm') && <div className="header__menu top-menu">
        <div className="top-menu__divider"></div>
        <div className="top-menu__btn">
          < Btn className="menu__item" type="button" onClick={menuSideHandler}>
            {(size === 'xs' || size === 'sm') && !showSideMenu &&
              <FontAwesomeIcon icon={faBars} />}
            {(size === 'xs' || size === 'sm') && showSideMenu &&
              <FontAwesomeIcon icon={faBarsStaggered} />}
          </Btn>
        </div>
        {showSideMenu && <div className="menu__btn">
        </div>}
      </div>}

      {(size === 'xs' || size === 'sm') && showSideMenu &&
        <div className="side-menu" onClick={menuSideHandler}>
          <div className="side-menu__links">
            <NavLink className="side-menu__item menu-item" end to="/games/train" >
              <FontAwesomeIcon className="menu-item__icon" icon={faTrain} />
              <span>Train</span>
            </NavLink>
            <NavLink className="side-menu__item menu-item" end to="/games/thousand" >
              <FontAwesomeIcon className="menu-item__icon" icon={faHatCowboySide} />
              <span>Card Game</span>
            </NavLink>
          </div>
          <div className="side-menu__divider"></div>
          <div className="side-menu__dashboard">
            {user && user.role && user.role === 'member' &&
              <span className="side-menu__item menu-item">
                <FontAwesomeIcon className="menu-item__icon" icon={faUserAstronaut} />
                {user.name}</span>
            }

            {/* <NavLink className="side-menu__item menu-item" end to="/dashboard" >
              <FontAwesomeIcon className="menu-item__icon" icon={faGears} />
              <span>Dashboard</span>
            </NavLink> */}


            {user && user.role !== 'member' &&
              <NavLink className="side-menu__item menu-item" end to="/auth" >
                <FontAwesomeIcon className="menu-item__icon" icon={faDoorClosed} />
                <span>Signin</span>
              </NavLink>
            }

            {user && user.role === 'member' &&
              <Btn className="anchor side-menu__item menu-item" type="button" onClick={logoutHandler}>
                <FontAwesomeIcon className="menu-item__icon" icon={faRightFromBracket} />
                <span>Logout</span>
              </Btn>
            }
          </div>
        </div>}

    </header >
  )
}


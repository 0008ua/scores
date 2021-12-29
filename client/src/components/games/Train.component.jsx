import React, { useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Btn from '../../ui/button/Btn';
import { config } from '../../app-config';

import RoundsMenuComponent from '../RoundsMenu';
import ChooseGamersComponent from '../ChooseGamers.component';
import TrainRoundsComponent from './TrainRounds.component';
// import Round2LengthComponent from './trainRounds/round2-length.component';
// import Round3StationsComponent from './trainRounds/round3-stations.component';
// import Round4CarsComponent from './trainRounds/round4-cars.component';
import RouteGuard from '../custom/RouteGuard';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { storeDataActions, storeDataSelectors } from '../../store/entities/store-data-config';

export default function TrainComponent() {
  const dispatch = useDispatch();
  const round = useParams()['*'];
  let navigate = useNavigate();
  const availablePaths = useMemo(() =>
    config.games.train.rounds.map((round) => round.path),
    []);

  useEffect(() => {
    if (!round || !availablePaths.includes(round)) {
      navigate(availablePaths[1], { replace: true })
    }
  }, [navigate, round, availablePaths])


  const gameActions = storeDataActions['game'];
  const gameSelectors = storeDataSelectors['game'];

  const games = useSelector(gameSelectors.selectAll).filter((game) => game.type === 'train');

  const routes = [
    {
      path: 'start',
      element: <RouteGuard redirect={'../' + availablePaths[1]}
        canActivate={games && !games.length}>
        < ChooseGamersComponent />
      </RouteGuard>,
      exact: 'true'
    },
    {
      path: ':round',
      element: <RouteGuard redirect="../start" canActivate={games && games.length}>
        < TrainRoundsComponent />
      </RouteGuard>,
      exact: 'true'
    },
    {
      index: true,
      element: <RouteGuard redirect="../start" canActivate={games && games.length}>
        < TrainRoundsComponent />
      </RouteGuard>,
      exact: 'true'
    },
  ];

  const endGameHandler = () => {
    // if game finished save to db

    // clear game from storage
    dispatch(gameActions.removeAll());
  }

  return (
    <div className="game">
      <div className="game__rounds-menu rounds-menu">
        <Routes>
          <Route path=":round"
            element={<RoundsMenuComponent gameType="train" />}
            exact="true"
          >
          </Route>
        </Routes>
      </div>

      <div className="game__content game-content container">
        <div className="game-content__header game-content-header">
          <h1 className="game-content-header__title heading-text">Train</h1>
          <div className="game-content-header__btn">
            {games && games.length > 0 && <Btn
              color="danger" type="button" onClick={() => endGameHandler()}>
              Finish game
            </Btn>}
          </div>

        </div>
        {/* <div className="game-content__summary">
          summary
        </div> */}
        <div className="game-content__round round">
          <Routes>
            {routes.map((route) => <Route {...route} key={uuidv4()} />)}
          </Routes>
        </div>
      </div>
    </div >
  )
}
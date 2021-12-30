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


  const clientGameActions = storeDataActions['clientGame'];
  const gameActions = storeDataActions['game'];
  const clientGameSelectors = storeDataSelectors['clientGame'];
  const clientRoundSelectors = storeDataSelectors['clientRound'];

  const clientGames = useSelector(clientGameSelectors.selectAll).filter((game) => game.type === 'train');
  const clientRounds = useSelector(clientRoundSelectors.selectAll);

  const routes = [
    {
      path: 'start',
      element: <RouteGuard redirect={'../' + availablePaths[1]}
        canActivate={clientGames && !clientGames.length}>
        < ChooseGamersComponent />
      </RouteGuard>,
      exact: 'true'
    },
    {
      path: ':round',
      element: <RouteGuard redirect="../start" canActivate={clientGames && clientGames.length}>
        < TrainRoundsComponent />
      </RouteGuard>,
      exact: 'true'
    },
    {
      index: true,
      element: <RouteGuard redirect="../start" canActivate={clientGames && clientGames.length}>
        < TrainRoundsComponent />
      </RouteGuard>,
      exact: 'true'
    },
  ];

  const endGameHandler = (finish) => {
    const clientRoundsWithTotal = clientRounds.map((round) => {
      const players = round.players.map((player) => {
        return {
          _id: player._id,
          score: player.scoresLine.reduce((prev, cur) => prev + cur, 0)
        }
      });
      return {...round, players}
    })
    const game = {
      type: clientGames[0].type,
      rounds: clientRoundsWithTotal,
    }

    console.log('game', game);
    // if game finished save to db
    if (finish) {
      dispatch(gameActions.add(game));
    }
    // clear game from storage
    dispatch(clientGameActions.removeAll());
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
            {clientGames && clientGames.length > 0 &&
              <Btn
                color="danger" type="button" onClick={() => endGameHandler(false)}>
                Cancel game
              </Btn> &&
              <Btn
                color="danger" type="button" onClick={() => endGameHandler(true)}>
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
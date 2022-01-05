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
  const clientPlayerSelectors = storeDataSelectors['clientPlayer'];

  const clientPlayers = useSelector(clientPlayerSelectors.selectAll);
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

  const calcTotalScores = (player_id) => {
    let sum = 0;
    clientRounds.forEach((round) => {
      round.players.forEach((player) => {
        if (player._id === player_id) {
          sum += player.scoresLine.reduce((prev, cur) => prev + cur, 0)
        }
      })
    })
    return sum;
  }
  const getPlayerColor = (player_id) => clientPlayers.find((player) => player._id === player_id).color;
  const getPlayerName = (player_id) => clientPlayers.find((player) => player._id === player_id).name;
  const getWinners = () => {
    let winners = [];
    let maxScore = 0;
    clientPlayers.forEach((player) => {
      const score = calcTotalScores(player._id);
      if (score === maxScore) {
        winners.push(player);
      } else if (score > maxScore) {
        maxScore = score;
        winners = [player];
      }
    })
    return winners;
  }
  const sortClientPlayersByScores = () => {
    console.log('rtwr')
    return [...clientPlayers].sort((a, b) => {
      console.log('calcTotalScores(a._id)', calcTotalScores(a._id))
      console.log('calcTotalScores(b._id)', calcTotalScores(b._id))
      return calcTotalScores(b._id) - calcTotalScores(a._id);
    });
  }

  const endGameHandler = (finish) => {
    const clientRoundsWithTotal = clientRounds.map((round) => {
      const players = round.players.map((player) => {
        return {
          _id: player._id,
          score: player.scoresLine.reduce((prev, cur) => prev + cur, 0)
        }
      });
      return { ...round, players }
    })
    const game = {
      type: clientGames[0].type,
      rounds: clientRoundsWithTotal,
    }
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
            exact="true">
          </Route>
        </Routes>
      </div>

      <div className="game__content game-content">
        <div className="game-content__header">
          <h1 className="game-content__header-text heading-text">Train</h1>
          <div className="game-content__header-buttons">
            {clientGames && clientGames.length > 0 &&
              <Btn
                color="danger" type="button" onClick={() => endGameHandler(false)}>
                Cancel game
              </Btn>}
            {clientGames && clientGames.length > 0 &&
              <Btn
                color="danger" type="button" onClick={() => endGameHandler(true)}>
                Finish game
              </Btn>}
          </div>
        </div>
        <div className="game-content__summary game-summary">
          {clientPlayers && sortClientPlayersByScores().map((player) => {
            return <div className="game-summary__item"
              style={{
                borderLeft: `4px solid ${getPlayerColor((player._id))}`,
              }}
              key={uuidv4()} >
              <span className="game-summary__item-name">
                {getPlayerName(player._id)}
              </span>
              <span className="game-summary__item-score"
                style={{
                  borderRight: `3px solid ${getPlayerColor((player._id))}`,

                }}

              ><strong>{calcTotalScores(player._id)}</strong></span>
            </div>
          })}
        </div>
        <div className="game-content__rounds">
          <Routes>
            {routes.map((route) => <Route {...route} key={uuidv4()} />)}
          </Routes>
        </div>
        {/* <div className="game-content__header game-content-header">
          <h1 className="game-content-header__title heading-text">Train</h1>
          <div className="game-content-header__btn">
            {clientGames && clientGames.length > 0 &&
              <Btn
                color="danger" type="button" onClick={() => endGameHandler(false)}>
                Cancel game
              </Btn>}
            {clientGames && clientGames.length > 0 &&
              <Btn
                color="danger" type="button" onClick={() => endGameHandler(true)}>
                Finish game
              </Btn>}
          </div>
          <div className="game-content-header__summary">


          </div>
        </div> */}
        {/* <div className="game-content__round round">
          <Routes>
            {routes.map((route) => <Route {...route} key={uuidv4()} />)}
          </Routes>
        </div> */}
      </div>
    </div >
  )
}
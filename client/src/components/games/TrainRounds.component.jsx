import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  faMinus, faPlus, faSubway,
  // faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  storeDataActions,
  storeDataSelectors
} from '../../store/entities/store-data-config';
import Btn from '../../ui/button/Btn';
import { config } from '../../app-config';
import { useEffect } from 'react';
const { routeMainScores } = config.games.train;
const { routeLocalScores } = config.games.train;
const { cars } = config.games.train;
// const round = 'routes';

export default function TrainRoundsComponent() {
  const dispatch = useDispatch();
  const { round } = useParams();

  const gameActions = storeDataActions['game'];
  const clientGameActions = storeDataActions['clientGame'];
  const clientRoundActions = storeDataActions['clientRound'];
  const gameSelectors = storeDataSelectors['game'];
  const clientGameSelectors = storeDataSelectors['clientGame'];
  const clientRoundSelectors = storeDataSelectors['clientRound'];
  const clientPlayerSelectors = storeDataSelectors['clientPlayer'];
  const game = useSelector(gameSelectors.selectAll)[0];
  const clientGame = useSelector(clientGameSelectors.selectAll)[0];
  const clientRounds = useSelector(clientRoundSelectors.selectAll);
  const clientRound = useSelector(state => clientRoundSelectors.selectById(state, round));
  const clientPlayers = useSelector(clientPlayerSelectors.selectAll);
  const [longestRoute, setLongestRoute] = useState(0);

  const getPlayerColor = (player_id) => clientPlayers.find((player) => player._id === player_id).color;
  const getPlayerName = (player_id) => clientPlayers.find((player) => player._id === player_id).name;
  const getCarQtyByScore = (score) => cars.find((car) => car.score === score).qty;

  const calcQtyOfArrItems = (player_id, item) => {
    let count = 0;
    clientRound.players
      .map((player) => {
        if (player._id === player_id) {
          player.scoresLine.forEach((arrItem) => {
            if (arrItem === item) {
              count++
            }
          })
        }
      });
    return count;
  }
  const calcScores = (scoresLine) => {
    console.log('scoresLine', scoresLine)
    return scoresLine.reduce((prev, cur) => prev + cur, 0)
  }

  const calcTotalScores = (player_id) => {
    let sum = 0;
    console.log('clientRounds', clientRounds)
    clientRounds.forEach((round) => {
      console.log('round', round)

      round.players.forEach((player) => {
        if (player._id === player_id) {
          sum += player.scoresLine.reduce((prev, cur) => prev + cur, 0)
        }
      })
    })
    return sum;
  }

  const scoresLineUpdateHandler = (data) => {
    const { score, player_id } = data;
    const changes = clientRound.players
      .map((player) => {
        if (player._id === player_id) {
          return { ...player, scoresLine: [score] };
        }
        return { ...player, scoresLine: [] };
      })
    dispatch(clientRoundActions.updateOne({
      id: round,
      changes: {
        // ...clientRound,
        players: changes,
      }
    }));
  }

  const scoresLineAddHandler = (data) => {
    const { score, player_id } = data;
    const changes = clientRound.players
      .map((player) => {
        if (player._id === player_id) {
          return { ...player, scoresLine: [...player.scoresLine, score] };
        }
        return player;
      })
    dispatch(clientRoundActions.updateOne({
      id: round,
      changes: {
        // ...clientRound,
        players: changes,
      }
    }));
  }

  const scoresLineRemoveHandler = (data) => {
    const { score, player_id } = data;
    console.log('game', game)
    const changes = clientRound.players
      .map((player) => {
        if (player._id === player_id) {
          const scoresLine = [...player.scoresLine];
          const index = scoresLine.indexOf(score);
          scoresLine.splice(index, 1);
          if (index !== -1) {
            return { ...player, scoresLine };
          }
        }
        return player;
      })
    dispatch(clientRoundActions.updateOne({
      id: round,
      changes: {
        players: changes,
      }
    }));
  }

  return (
    <>
      {/* <h3 className="round__title">Points for routes</h3> */}
      <div className="round__body">
        {clientRound && clientRound.players.map((player) =>
          <div className="round__item round-item" key={player._id} >
            <div className="round-item__summary">
              <h4 className="round-item__summary-name" style={{ color: getPlayerColor(player._id) }}>{getPlayerName(player._id)}</h4>
              <h5 className="round-item__summary-scores">
                <span>This round: {calcScores(player.scoresLine)} </span>
                <span>Total: {calcTotalScores(player._id)} </span>
              </h5>
            </div>
            {clientRound._id === 'routes' && <div className='round-item__gameplay gameplay' >
              <div className="gameplay__visualization gameplay__visualization_routes">
                {player.scoresLine.map((score) =>
                  <Btn customType="narrow" color={score > 19 ? "route-main" : "route-local"}
                    key={uuidv4()}
                    onClick={() => scoresLineRemoveHandler({ score, player_id: player._id })}>
                    {score}</Btn>)}
              </div>
              <div className="gameplay__tools">
                {routeMainScores && routeMainScores.map((score) =>
                  <Btn color="route-main" customType="narrow" key={score} onClick={() => scoresLineAddHandler({ score, player_id: player._id })}>{score}</Btn>)}
                {routeLocalScores && routeLocalScores.map((score) =>
                  <Btn color="route-local" customType="narrow" key={score} onClick={() => scoresLineAddHandler({ score, player_id: player._id })}>{score}</Btn>)}
              </div>
            </div>}

            {clientRound._id === 'length' && <div className='round-item__gameplay gameplay' >
              <div className="gameplay__visualization gameplay__visualization_length"
                onClick={() => scoresLineUpdateHandler({ player_id: player._id, score: 10 })}>
                {player.scoresLine.length
                  ?
                  <Btn color='primary' className='length length_longest'>
                    <FontAwesomeIcon className="gameplay__car-btn_icon" icon={faSubway} />
                    <span className="dbl-icon-btn__text">Longest route</span>
                    <FontAwesomeIcon className="gameplay__car-btn_icon" icon={faSubway} />
                  </Btn>
                  :
                  <Btn className='length length_short'>Mark as longest route</Btn>
                }
              </div>
            </div>}

            {clientRound._id === 'stations' && <div className='round-item__gameplay gameplay' >
              <div className="gameplay__visualization gameplay__visualization_stations" >
                <Btn color='primary' customType="sticky-left" disabled={player.scoresLine.length > 3}
                  onClick={() => scoresLineAddHandler({ score: -4, player_id: player._id })}>
                  <FontAwesomeIcon className="gameplay__car-btn_icon" icon={faPlus} />
                </Btn>
                <Btn color='primary' customType="sticky">
                  <span className="dbl-icon-btn__text">Used: {player.scoresLine.length - 1}</span>
                  <FontAwesomeIcon className="gameplay__car-btn_icon" icon={faSubway} />
                </Btn>
                <Btn color='primary' customType="sticky-right" disabled={player.scoresLine.length < 2}
                  onClick={() => scoresLineRemoveHandler({ score: -4, player_id: player._id })}>
                  <FontAwesomeIcon className="gameplay__car-btn_icon" icon={faMinus} />
                </Btn>
              </div>
            </div>}

            {clientRound._id === 'cars' && <div className='round-item__gameplay gameplay' >
              <div className="gameplay__visualization gameplay__visualization_cars">
                {[8, 6, 4, 3, 2, 1].map((score) =>
                  <div className="car" key={uuidv4()}>
                    <Btn color={getPlayerColor(player._id)}
                      customType="sticky-left"
                      onClick={() => scoresLineAddHandler({ score, player_id: player._id })}>
                      <FontAwesomeIcon className="gameplay__car-btn_icon" icon={faPlus} />
                    </Btn>
                    <Btn color={getPlayerColor(player._id)}
                      customType="sticky">
                      <span className="dbl-icon-btn__text">{score}</span>

                      <FontAwesomeIcon className="gameplay__car-btn_icon" icon={faSubway} />
                    </Btn>
                    <Btn color={getPlayerColor(player._id)}
                      customType="sticky-right"
                      onClick={() => scoresLineRemoveHandler({ score, player_id: player._id })}>
                      <FontAwesomeIcon className="gameplay__car-btn_icon" icon={faMinus} />
                    </Btn>
                    <span className='dbl-icon-btn__text'>{calcQtyOfArrItems(player._id, score)}</span>
                  </div>



                  // <Btn
                  //   color={getPlayerColor(player._id)}
                  //   customType="narrow"
                  //   key={uuidv4()}
                  //   onClick={() => scoresLineRemoveHandler({ score: score, player_id: player._id })}>
                  //   {Array(getCarQtyByScore(score)).fill('').map((_) =>
                  //     <FontAwesomeIcon key={uuidv4()} className="gameplay__car-btn_icon" icon={faSubway} />
                  //   )}
                  //   <span className="gameplay__car-btn_text">{getCarQtyByScore(score)}</span>
                  // </Btn>
                )}
              </div>
              {/* <div className="gameplay__tools">
                {cars && cars.map((car) =>
                  <Btn
                    color={getPlayerColor(player._id)}
                    customType="narrow"
                    key={car.qty}
                    onClick={() => scoresLineAddHandler({ score: car.score, player_id: player._id })}
                  >
                    <FontAwesomeIcon key={uuidv4()} className="gameplay__car-btn_icon" icon={faSubway} />
                    <span className="gameplay__car-btn_text">{car.qty}</span>
                  </Btn>)}
              </div> */}
            </div>}
          </div>
        )}
      </div>


    </>

  )

}

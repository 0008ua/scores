import React from 'react';
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  faMinus, faPlus, faSubway, faSchool, faMapMarkedAlt
  // faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  storeDataActions,
  storeDataSelectors
} from '../../store/entities/store-data-config';
import Btn from '../../ui/button/Btn';
import { config } from '../../app-config';
import BtnBlk from '../../ui/buttonBlock/BtnBlk';
const { routeMainScores } = config.games.train;
const { routeLocalScores } = config.games.train;
const { routeLocalScoresTop } = config.games.train;
const { cars } = config.games.train;
// const round = 'routes';

export default function TrainRoundsComponent() {
  const dispatch = useDispatch();
  const { round } = useParams();

  const clientRoundActions = storeDataActions['clientRound'];
  // const gameSelectors = storeDataSelectors['game'];
  // const clientGameSelectors = storeDataSelectors['clientGame'];
  const clientRoundSelectors = storeDataSelectors['clientRound'];
  const clientPlayerSelectors = storeDataSelectors['clientPlayer'];
  // const game = useSelector(gameSelectors.selectAll)[0];
  // const clientGame = useSelector(clientGameSelectors.selectAll)[0];
  const clientRounds = useSelector(clientRoundSelectors.selectAll);
  const clientRound = useSelector(state => clientRoundSelectors.selectById(state, round));
  const clientPlayers = useSelector(clientPlayerSelectors.selectAll);
  // const [longestRoute, setLongestRoute] = useState(0);

  const getPlayerColor = (player_id) => clientPlayers.find((player) => player._id === player_id).color;
  const getPlayerName = (player_id) => clientPlayers.find((player) => player._id === player_id).name;
  // const getCarQtyByScore = (score) => cars.find((car) => car.score === score).qty;

  const calcQtyOfArrItems = (player_id, item) => {
    let count = 0;
    clientRound.players
      .forEach((player) => {
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
    return scoresLine.reduce((prev, cur) => prev + cur, 0)
  }

  // const calcTotalScores = (player_id) => {
  //   let sum = 0;
  //   clientRounds.forEach((round) => {
  //     round.players.forEach((player) => {
  //       if (player._id === player_id) {
  //         sum += player.scoresLine.reduce((prev, cur) => prev + cur, 0)
  //       }
  //     })
  //   })
  //   return sum;
  // }

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
        players: changes,
      }
    }));
  }

  const scoresLineRemoveHandler = (data) => {
    const { score, player_id } = data;
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
      {/* <div className="round__body"> */}
      {clientRound && clientRound.players.map((player) =>
        <div className="round" key={player._id} >
          <div className="round__summary" style={{
            borderBottom: '2px solid ' + getPlayerColor(player._id),
          }}>
            <h4 className="round__summary-name" >{getPlayerName(player._id)}</h4>
            <h5 className="round__summary-scores">Scores: {calcScores(player.scoresLine)}
              {/* <span>Total: {calcTotalScores(player._id)} </span> */}
            </h5>
          </div>

          {clientRound._id === 'routes' && <div className='round__gameplay gameplay_routes' >
            <div className="gameplay_routes__visual">
              {player.scoresLine.map((score) =>
                <Btn customType="narrow" color={score > 19 ? "route-main" : "route-local"}
                  key={uuidv4()}
                  onClick={() => scoresLineRemoveHandler({ score, player_id: player._id })}>
                  {score}</Btn>)}
            </div>
            <div className="gameplay_routes__tools">
              {/* <div className="gameplay_routes__tools-item">
                {routeMainScores && routeMainScores.map((score) =>
                  <Btn color="route-main" customType="narrow"
                    key={score}
                    onClick={() => scoresLineAddHandler({ score, player_id: player._id })}>{score}
                  </Btn>)}
              </div> */}
              <div className="gameplay_routes__tools-item">
                {routeLocalScores && routeLocalScores.map((score) =>
                  <Btn color="route-local" key={score} onClick={() => scoresLineAddHandler({ score, player_id: player._id })}>{score}</Btn>)}
              </div>
              <div className="gameplay_routes__tools-item">
                {routeLocalScoresTop && routeLocalScoresTop.map((score) =>
                  <Btn  color="route-local" key={score} onClick={() => scoresLineAddHandler({ score, player_id: player._id })}>{score}</Btn>)}
                {routeMainScores && routeMainScores.map((score) =>
                  <Btn color="route-main"
                    key={score}
                    onClick={() => scoresLineAddHandler({ score, player_id: player._id })}>{score}
                  </Btn>)}
              </div>
            </div>

          </div>}

          {clientRound._id === 'length' && <div className='round__gameplay gameplay_length' >
            <div className="gameplay_length__visual"
              onClick={() => scoresLineUpdateHandler({ player_id: player._id, score: 10 })}>
              {player.scoresLine.length
                ?
                <Btn color='primary' className='gameplay_length__visual-item gameplay_length__visual-item_longest'>
                  <FontAwesomeIcon className="icon-btn__icon" icon={faMapMarkedAlt} />
                  <span className="icon-btn__text">Longest route</span>
                </Btn>
                :
                <Btn className='gameplay_length__visual-item gameplay_length__visual-item_regular'>
                  Mark as longest route</Btn>
              }
            </div>
          </div>}

          {clientRound._id === 'stations' && <div className='round__gameplay gameplay_stations' >
            <div className="gameplay_stations__visual">
              {/* <div className="gameplay_stations__visual-item">
                <Btn color='primary' customType="sticky-left" disabled={player.scoresLine.length > 3}
                  onClick={() => scoresLineAddHandler({ score: -4, player_id: player._id })}>
                  <FontAwesomeIcon icon={faPlus} />
                </Btn>
                <Btn color='primary' customType="sticky">
                  <FontAwesomeIcon className="icon-btn__icon" icon={faSchool} />
                  <span className="icon-btn__text">{player.scoresLine.length - 1}</span>
                </Btn>
                <Btn color='primary' customType="sticky-right" disabled={player.scoresLine.length < 2}
                  onClick={() => scoresLineRemoveHandler({ score: -4, player_id: player._id })}>
                  <FontAwesomeIcon icon={faMinus} />
                </Btn>
              </div> */}

              <BtnBlk
                className="gameplay_stations__visual-item"
                // color='primary'

                plusDisabled={player.scoresLine.length > 3}
                minusDisabled={player.scoresLine.length < 2}
                plusHandler={() => scoresLineAddHandler({ score: -4, player_id: player._id })}
                minusHandler={() => scoresLineRemoveHandler({ score: -4, player_id: player._id })}>
                <FontAwesomeIcon className="icon-btn__icon" icon={faSchool} />
                <span className="icon-btn__text">{player.scoresLine.length - 1}</span>
              </BtnBlk>

            </div>
          </div>}

          {clientRound._id === 'cars' && <div className='round__gameplay gameplay_cars' >
            <div className="gameplay_cars__visual">
              {cars.map((car) =>
                <div className="gameplay_cars__visual-item" key={uuidv4()}>
                  <BtnBlk
                    key={uuidv4()}
                    style={{
                      borderBottom: `1px solid ${getPlayerColor(player._id)}`,
                      // borderTop: `1px solid ${getPlayerColor(player._id)}`,
                      borderRadius: '.25rem'
                    }}
                    className="gameplay_cars__visual-item_btn"
                    // color='primary'
                    plusHandler={() => scoresLineAddHandler({ score: car.score, player_id: player._id })}
                    minusHandler={() => scoresLineRemoveHandler({ score: car.score, player_id: player._id })}>
                    <FontAwesomeIcon className="icon-btn__icon" icon={faSubway} />
                    <span className="icon-btn__text">{car.qty}</span>
                  </BtnBlk>
                  <span className='gameplay_cars__visual-item_score'>
                    <strong>{calcQtyOfArrItems(player._id, car.score)}
                    </strong></span>
                </div>
              )}
            </div>
          </div>}
        </div>
      )}
    </>
  )
}

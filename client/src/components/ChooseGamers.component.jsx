import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeDataActions, storeDataSelectors } from '../store/entities/store-data-config';
import Btn from '../ui/button/Btn';
import Sel from '../ui/select/Sel';
import { config } from '../app-config';
import {
  faMinus,
  // faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';
import CreateGamerComponent from './CreateGamer.component';
import SelectColorComponent from './SelectColor.component';
import { useCallback } from 'react';

// const { playersColors, maxPlayersQty }= config.games.train;

export default function ChooseGamersComponent() {
  const dispatch = useDispatch();
  const gamerSelectors = storeDataSelectors['gamer'];
  const recentPlayerSelectors = storeDataSelectors['recentPlayer'];
  const clientPlayerSelectors = storeDataSelectors['clientPlayer'];
  const gamers = useSelector(gamerSelectors.selectAll);
  const recentPlayers = useSelector(recentPlayerSelectors.selectAll);
  const clientPlayers = useSelector(clientPlayerSelectors.selectAll);
  const maxPlayersQty = useMemo(() => config.games.train.maxPlayersQty, []);
  const playersColors = useMemo(() => config.games.train.playersColors, []);
  // const [players, setPlayers] = useState([]);
  const [filtredGamers, setFiltredGamers] = useState([]);
  const [filtredColors, setFiltredColors] = useState(playersColors);
  const [showCreateGamer, setShowCreateGamer] = useState(false);

  const gamerActions = storeDataActions['gamer'];
  const recentPlayerActions = storeDataActions['recentPlayer'];
  const clientPlayerActions = storeDataActions['clientPlayer'];
  const clientGameActions = storeDataActions['clientGame'];
  const clientRoundActions = storeDataActions['clientRound'];

  const setPlayersToStore = useCallback((players) => {
    // dispatch(clientPlayerActions.removeAll());
    // dispatch(clientPlayerActions.addMany(clientPlayers));
    dispatch(clientPlayerActions.setAll(players));
  }, [dispatch, clientPlayerActions])

  useEffect(() => {
    setPlayersToStore(recentPlayers);
    // setPlayers(recentPlayers);
  }, [recentPlayers, setPlayersToStore]);

  useEffect(() => {
    dispatch(gamerActions.getAll());
  }, [dispatch, gamerActions, recentPlayerActions]);

  // const players_ids = useMemo(() => clientPlayers.map((player) => player._id), [clientPlayers]);

  const addPlayerHandler = () => {
    const preferredColor = filtredGamers[0].color;
    if (filtredColors.includes(preferredColor)) {
      return setPlayersToStore([...clientPlayers, filtredGamers[0]]);
      // return setPlayers([...players, filtredGamers[0]]);
    }
    setPlayersToStore([...clientPlayers, { ...filtredGamers[0], color: filtredColors[0] }]);
    // setPlayers([...players, { ...filtredGamers[0], color: filtredColors[0] }]);
  }

  // const removePlayerHandler = (idx) => setPlayers(players.filter((_, i) => i !== idx));
  // const removeAllPlayersHandler = (idx) => setPlayers([]);
  const removePlayerHandler = (idx) => setPlayersToStore(clientPlayers.filter((_, i) => i !== idx));
  const removeAllPlayersHandler = (idx) => setPlayersToStore([]);

  const startGameHandler = () => {
    const players = clientPlayers.map((player) => ({
      _id: player._id,
      // scores: function () {
      //   console.log('this', this)
      //   return this.scoresLine.reduce((prev, cur) => prev + cur, 0)
      // },
      scoresLine: []
    }));

    const stationsRoundPlayers = clientPlayers.map((player) => ({
      _id: player._id,
      // scores: function () {
      //   console.log('this', this)
      //   return this.scoresLine.reduce((prev, cur) => prev + cur, 0)
      // },
      scoresLine: [12]
    }));

    const clientRounds = [
      { _id: 'start', players },
      { _id: 'routes', players },
      { _id: 'length', players },
      { _id: 'stations', players: stationsRoundPlayers},
      { _id: 'cars', players },
    ]


    // const scores = players;
    const clientGame = {
      _id: uuidv4(),
      type: 'train',
      // players: players_ids,
      // rounds: {
      //   start: rounds,
      //   routes: rounds,
      //   length: rounds,
      // }
    };

    console.log('clientGame', clientGame);


    // const game = {
    //   _id: uuidv4(),
    //   type: 'train',
    //   clientPlayers,
    //   rounds: {
    //     start: scores,
    //     routes: scores,
    //     length: scores,
    //   }

    // };

    // dispatch(gameActions.removeAll());
    // dispatch(gameActions.addOne(game));
    // dispatch(gameActions.setAll([game]));
    // dispatch(clientGameActions.removeAll());
    // dispatch(clientGameActions.addOne(clientGame));
    dispatch(clientGameActions.setAll([clientGame]));
    dispatch(recentPlayerActions.setAll(clientPlayers));
    dispatch(clientRoundActions.setAll(clientRounds));

    // dispatch(recentPlayerActions.removeAll());
    // dispatch(recentPlayerActions.addMany(clientPlayers));
  }

  useEffect(() => {
    const filtredGamers = gamers.filter((gamer) => {
      for (let i = 0; i < clientPlayers.length; i++) {
        if (clientPlayers[i]._id === gamer._id) {
          return false;
        }
      }
      return true;
    });
    setFiltredGamers(filtredGamers);
  }, [clientPlayers, gamers]);

  useEffect(() => {
    const filtredColors = playersColors.filter((color) => {
      for (let i = 0; i < clientPlayers.length; i++) {
        if (clientPlayers[i].color === color) {
          return false;
        }
      }
      return true;
    });
    setFiltredColors(filtredColors);
  }, [clientPlayers, playersColors]);


  // const selectPlayerHandler = (idx) => (e) => setPlayers(players.map((player, i) => {
  const selectPlayerHandler = (idx) => (e) => setPlayersToStore(clientPlayers.map((player, i) => {
    if (idx === i) {
      const selectedPlayer = filtredGamers.filter((gamer) => gamer._id === e.target.value)[0];
      const preferredColor = selectedPlayer.color;
      if (filtredColors.includes(preferredColor)) {
        return selectedPlayer;
      }
      return { ...selectedPlayer, color: filtredColors[0] };
    }
    return player;
  }));

  const selectColor = (color, idx) =>
    setPlayersToStore(
      clientPlayers.map((player, i) => idx === i ? { ...player, color } : player)
    )
  // setPlayers(
  //   players.map((player, i) => idx === i ? { ...player, color } : player)
  // )

  const createGamer = (gamer) => {
    setShowCreateGamer(false);
    if (!gamer) {
      return;
    }

    // const { color, name } = gamer;
    dispatch(gamerActions.add(gamer));
    // console.log('create gamer color ', color, 'name ', name);
  }

  const createGamerHandler = () => {
    setShowCreateGamer(true);
  }
  // const switchSelectColorHandler = (idx) => setShowSelectColor((prev) => prev ? !prev : idx + 1);

  return (
    <div className="container choose-gamers">
      <div className="row choose-gamers__header">
        <h2 className="heading-text">Choose gamers</h2>

      </div>
      {clientPlayers.map((player, idx) =>
        <div key={player._id} className="row row_nowrap choose-gamers__form choose-gamers-form">
          <div className="choose-gamers-form__select-color">
            <SelectColorComponent
              color={player.color} idx={idx}
              filtredColors={filtredColors}
              selectColor={selectColor} />
          </div>
          <Sel className="choose-gamers-form__select-name"
            onChange={selectPlayerHandler(idx)} value={clientPlayers[idx]._id}>
            <option value={player._id} key={player._id}>{player.name}</option>
            {filtredGamers.map((gamer) =>
              <option value={gamer._id} key={gamer._id}>{gamer.name}</option>
            )}
          </Sel>
          <Btn className="choose-gamers-form__remove-gamer" customType="icon"
            color="danger" type="button" onClick={() => removePlayerHandler(idx)}>
            <FontAwesomeIcon icon={faMinus} />
          </Btn>
        </div >
      )}
      <div className="row choose-gamers__btns">
        <Btn className="choose-gamers-btns__item"
          type="button" disabled={!filtredGamers.length || clientPlayers.length >= maxPlayersQty}
          onClick={addPlayerHandler}>Add</Btn>
        <Btn className="choose-gamers-btns__item"
          type="button"
          onClick={createGamerHandler}>Create</Btn>
        <Btn className="choose-gamers-btns__item"
          type="button" disabled={!clientPlayers.length}
          onClick={removeAllPlayersHandler}>Remove All</Btn>
      </div>

      {clientPlayers && clientPlayers.length > 1 && <div className="row choose-gamers__submit">
        <Btn color="primary" type="button" onClick={startGameHandler}>Start game</Btn>
      </div>}

      {showCreateGamer && <CreateGamerComponent createGamer={createGamer} />}
    </div >
  )
}

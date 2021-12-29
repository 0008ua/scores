import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/reducers/auth.reducer';
import { storeDataActions, storeDataSelectors } from '../../store/entities/store-data-config';

export default function DashboardComponent() {


  const gamerActions = storeDataActions['gamer'];
  const gamerSelectors = storeDataSelectors['gamer'];

  const trainGameActions = storeDataActions['trainGame'];
  const trainGameSelectors = storeDataSelectors['trainGame'];

  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const gamers = useSelector(gamerSelectors.selectAll);
  const trainGames = useSelector(trainGameSelectors.selectAll);

  useEffect(() => {
    dispatch(gamerActions.getAll());
  }, [dispatch, gamerActions]);

  useEffect(() => {
    dispatch(trainGameActions.getAll());
  }, [dispatch, trainGameActions]);

  return (
    <div>
      <h1>User {user && user.role}</h1>
      <ul>
        <li>Gamers</li>
        {gamers && gamers.map((gamer) => {
          return <li key={gamer._id}>{gamer.name}</li>
        })}
      </ul>
      <ul>
        <li>Train Games</li>
        {trainGames && trainGames.map((game) => {
          return <li key={game._id}>{game.type}</li>
        })}
      </ul>
    </div>
  )
}

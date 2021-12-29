import React, { useMemo } from 'react';
import { config } from '../app-config';
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import { storeDataSelectors } from '../store/entities/store-data-config';

export default function RoundsMenuComponent({ gameType }) {
  let { round } = useParams();
  const gameSelectors = storeDataSelectors['game'];
  const games = useSelector(gameSelectors.selectAll).filter((game) => game.type === gameType);

  const activeRound = useMemo(() =>
    config.games[gameType].rounds
      .filter((roundCfg) => roundCfg.path === round)
      .map((roundCfg) => ({ ...roundCfg, idx: config.games[gameType].rounds.indexOf(roundCfg) }))[0]
    , [round, gameType]);
  return (
    <>
      {activeRound && gameType && config.games[gameType].rounds && config.games[gameType].rounds.map(
        (item, idx) =>
          <NavLink disabled={(item.path === 'start' && games && games.length) ||
            (item.path !== 'start' && games && !games.length)}
            className={`rounds-menu__item
          ${idx < activeRound.idx ? 'rounds-menu__item_passed' : ''}
          ${idx > activeRound.idx ? 'rounds-menu__item_upcomming' : ''}
          `}
            key={item.path}
            end to={'../' + item.path}
          ><FontAwesomeIcon icon={item.icon} />
          </NavLink>
      )}
    </>
  )
}

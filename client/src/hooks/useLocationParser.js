import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { config } from '../app-config';

export const useLocationParser = () => {
  let location = useLocation();
  const [gameType, setGameType] = useState('');
  const [activeRound, setActiveRound] = useState({});
  const [round, setRound] = useState('');

  useEffect(() => {
    // console.log('location', location);
    const { pathname } = location;
    const parsedLocation = pathname.split('/');
    const parsedIndex = parsedLocation.indexOf('games');
    const parsed = parsedLocation.splice(parsedIndex + 1);
    console.log('parsed', parsed)
    // console.log('parsedIndex', parsedIndex);
    const gameType = parsed[0];
    setRound(parsed[1])
    // const roundName = parsed[2];
    setGameType(gameType);

    if (round) {
      const actRound = config.games[gameType].rounds
        .filter((roundCfg) => roundCfg.path === round)
        .map((roundCfg) => ({ ...roundCfg, idx: config.games[gameType].rounds.indexOf(roundCfg) }))[0];
      // console.log('round', round);
      setActiveRound(actRound);
    }

  }, [location, round]);

  return { gameType, activeRound, round }
}
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('persistStorage', JSON.stringify({
      game: getState().game,
      recentPlayer: getState().recentPlayer,
      clientPlayer: getState().clientPlayer,
      clientGame: getState().clientGame,
      clientRound: getState().clientRound,
    }

    ));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('persistStorage') !== null) {
    // console.log('local hydarte', localStorage.getItem('persistStorage'))
    return { ...JSON.parse(localStorage.getItem('persistStorage')) };
  }
}

export const store = createStore(
  rootReducer,
  reHydrateStore(),
  composeWithDevTools(
    applyMiddleware(
      epicMiddleware,
      localStorageMiddleware,
    )
  ),

);

epicMiddleware.run(rootEpic);
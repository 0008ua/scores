import storeDataFactory from './store-data';
// import {gamerActions, gamerSelectors} from './gamer';

const entitiesMetadata = {
  // all regitred gamers
  gamer: {
    entityPluralName: 'gamers',
    apiRootPath: '/api/store/',
    sortComparer: (a, b) => a.name.localeCompare(b.name),
  },
  // last game players
  recentPlayer: {
    entityPluralName: 'recentPlayers',
    apiRootPath: '/api/store/',
    sortComparer: (a, b) => a._id.localeCompare(b._id),
  },
  // gamers chosen for game (with custom color selected)
  clientPlayer: {
    entityPluralName: 'clientPlayers',
    apiRootPath: '/api/store/',
    sortComparer: (a, b) => a._id.localeCompare(b._id),
  },
  game: {
    entityPluralName: 'games',
    apiRootPath: '/api/store/',
    sortComparer: (a, b) => a.type.localeCompare(b.type),

  },
  clientGame: {
    entityPluralName: 'clientGames',
    apiRootPath: '/api/store/',
    sortComparer: (a, b) => a.type.localeCompare(b.type),
  },
  clientRound: {
    entityPluralName: 'currentRounds',
    apiRootPath: '/api/store/',
    sortComparer: (a, b) => a._id.localeCompare(b._id),
  }
}

const {
  storeDataActions,
  storeDataReducers,
  storeDataActionsTypes,
  storeDataEpics,
  storeDataSelectors
} = storeDataFactory(entitiesMetadata);

// console.log('actions', storeDataActions);
// console.log('storeDataReducers', storeDataReducers);
// console.log('actionTypes', storeDataActionsTypes);
// console.log('epics', storeDataEpics);
// console.log('storeDataSelectors', storeDataSelectors);

export {
  storeDataActions,
  storeDataReducers,
  storeDataActionsTypes,
  storeDataEpics,
  storeDataSelectors
};



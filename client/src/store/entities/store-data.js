import { ofType } from 'redux-observable';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { httpService } from '../../services/container';
import { appError } from '../reducers';
import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

class StoreDataService {
  constructor(httpService, entitiesConfig) {
    this.httpService = httpService;
    this.entitiesConfig = entitiesConfig;
  }

  use(entityName) {
    if (this.entitiesConfig[entityName]) {
      this.entityName = entityName;
      this.apiRootPath = this.entitiesConfig[entityName].apiRootPath;
      this.entityPluralName = this.entitiesConfig[entityName].entityPluralName;
      return this;
    }
    return null;
  }

  add(entity) {
    return this.httpService.post(`${this.apiRootPath}${this.entityName}`, { body: entity });
  } // setOne

  remove(_id) {
    return this.httpService.delete(`${this.apiRootPath}${this.entityName}/${_id}`);
  } // removeOne

  getAll() {
    return this.httpService.get(`${this.apiRootPath}${this.entityPluralName}`);
  } // setAll

  getById(_id) {
    return this.httpService.get(`${this.apiRootPath}${this.entityName}/${_id}`);
  }

  getWithQuery(queryParams) {
    return this.httpService.get(`${this.apiRootPath}${this.entityPluralName}`, queryParams);
  }  // setAll

  //should behave like patch
  update(update) {
    return this.httpService.put(`${this.apiRootPath}${this.entityName}/${update._id}`, { body: update });
  }  //upsertOne
}

const storeDataActionsCreator = (entityConfig) => {
  const { entityName } = entityConfig;

  const createAction = (type, payload) => {
    return (payload) => ({ type, payload });
  }

  const actionTypes = {
    ADD: `${entityName}/dataService add`,
    REMOVE: `${entityName}/dataService remove`,
    GET_ALL: `${entityName}/dataService getAll`,
    GET_BY_ID: `${entityName}/dataService getById`,
    GET_WITH_QUERY: `${entityName}/dataService getWithQuery`,
    UPDATE: `${entityName}/dataService update`,
    ERROR: `${entityName}/dataService error`,
  }

  const actions = {
    add: createAction(actionTypes.ADD),
    remove: createAction(actionTypes.REMOVE),
    getAll: createAction(actionTypes.GET_ALL),
    getById: createAction(actionTypes.GET_BY_ID),
    getWithQuery: createAction(actionTypes.GET_WITH_QUERY),
    update: createAction(actionTypes.UPDATE),
    error: createAction(actionTypes.ERROR),
  }
  return {
    actionTypes, actions
  }
}

// const entityReducersCreator = (entityConfig, actionTypes) => {
//   const {
//     entityName,
//     initialState,
//     entityUppercaseName,
//     entityUppercasePluralName,
//   } = entityConfig;

//   const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case actionTypes[`GET_${entityUppercaseName}_SUCCESS`]:
//         return {
//           ...state,
//           ...{ [entityName]: { entity: action.payload } },
//         }
//       case actionTypes[`GET_${entityUppercasePluralName}_SUCCESS`]:
//         return {
//           ...state,
//           ...{ [entityName]: { entity: action.payload } },
//         }
//       case actionTypes[`ERROR_${entityUppercaseName}`]:
//         return {
//           ...state,
//           ...{ [entityName]: { error: action.payload } },
//         }
//       default:
//         return state;
//     }
//   }
//   return reducer;
// }

const storeDataEpicsCreator = (entityConfig, actionTypes, actions, storeDataService) => {
  const { entityName } = entityConfig;
  const epics = {
    [`${entityName}/getById`]:
      (action$) => action$.pipe(
        ofType(actionTypes.GET_BY_ID),
        map((action) => action.payload),
        switchMap((_id) => storeDataService.use(entityName).getById(_id).pipe(
          tap((x) => console.log('got one ', x)),
          switchMap((entity) => [actions.setOne(entity)]),
          catchError((error) => [appError(error)])
        )),
      ),
    [`${entityName}/getAll`]:
      (action$) => action$.pipe(
        ofType(actionTypes.GET_ALL),
        tap((x) => console.log('x', x)),
        switchMap(() => storeDataService.use(entityName).getAll().pipe(
          switchMap((entity) => [actions.setAll(entity)]),
          catchError((error) => [appError(error)])
        )),
      ),
    [`${entityName}/add`]:
      (action$) => action$.pipe(
        ofType(actionTypes.ADD),
        map((action) => action.payload),
        switchMap((payload) => storeDataService.use(entityName).add(payload).pipe(
          switchMap((entity) => [actions.addOne(entity)]),
          catchError((error) => [appError(error)])
        )),
      ),
    [`${entityName}/update`]:
      (action$) => action$.pipe(
        ofType(actionTypes.UPDATE),
        map((action) => action.payload),
        switchMap((payload) => storeDataService.use(entityName).update(payload).pipe(
          switchMap((entity) => [actions.updateOne(entity)]),
          catchError((error) => [appError(error)])
        )),
      ),

  };
  return epics;
}

const storeDataModuleConfig = (entitiesMetadata) => {
  const entitiesConfig = {};
  for (let key in entitiesMetadata) {
    const entityPluralName = entitiesMetadata[key].entityPluralName || key + 's';
    entitiesConfig[key] = {
      entityActions: entitiesMetadata[key].entityActions,
      entitySelectors: entitiesMetadata[key].entitySelectors,
      entityName: key,
      apiRootPath: entitiesMetadata[key].apiRootPath || '/api/store/',
      entityPluralName,
      entityUppercaseName: key.toUpperCase(),
      entityUppercasePluralName: entityPluralName.toUpperCase(),
      entityCapitalizeName: key.charAt(0).toUpperCase() + key.slice(1),
      entityCapitalizePluralName:
      entityPluralName.charAt(0).toUpperCase() + entityPluralName.slice(1),
      sortComparer: entitiesMetadata[key].sortComparer || function (a, b) {return a.name.localeCompare(b.name)},
    }
  }
  return entitiesConfig;
}

export default function storeDataFactory(entitiesMetadata) {
  const entitiesConfig = storeDataModuleConfig(entitiesMetadata);
  const storeDataService = new StoreDataService(httpService, entitiesConfig);
  const storeDataActionsTypes = {};
  const storeDataActions = {};
  const storeDataReducers = {};
  let storeDataEpics = {};
  const storeDataSelectors = {}

  for (let key in entitiesConfig) {
    storeDataActions[key] = storeDataActionsCreator(entitiesConfig[key]).actions;
    storeDataActionsTypes[key] = storeDataActionsCreator(entitiesConfig[key]).actionTypes;

    const entityAdapter = createEntityAdapter({
      selectId: (_) => _._id,
      sortComparer: entitiesConfig[key].sortComparer
    })

    const entitySlice = createSlice({
      name: entitiesConfig[key].entityName,
      initialState: entityAdapter.getInitialState(),
      reducers: {
        ...entityAdapter,
        // gamersaddOne: gamerAdapter.addOne,
        // gamersReceived(state, action) {
        //   gamerAdapter.setAll(state, action.payload.gamer)
        // },
      },
    });

    const entityReducer = entitySlice.reducer;
    const entityActions = entitySlice.actions;
    const entitySelectors = entityAdapter.getSelectors((state) => state[entitiesConfig[key].entityName]);
    storeDataActions[key] = { ...entityActions, ...storeDataActions[key] };
    storeDataSelectors[key] = entitySelectors;
    storeDataReducers[key] = entityReducer;
    storeDataEpics = {
      ...storeDataEpics,
      ...storeDataEpicsCreator(entitiesConfig[key],
        storeDataActionsTypes[key],
        storeDataActions[key],
        storeDataService
      )
    };

  }
  return {
    storeDataActions,
    storeDataActionsTypes,
    storeDataEpics,
    storeDataSelectors,
    storeDataReducers,
  };
}

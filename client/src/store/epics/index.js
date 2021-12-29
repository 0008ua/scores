import { combineEpics } from 'redux-observable';
import authEpics from './auth.epics';
import { storeDataEpics } from '../entities/store-data-config';

const entityDataEpicsAr = Object.keys(storeDataEpics).map((key) => storeDataEpics[key]);
const authEpicsAr = Object.keys(authEpics).map((key) => authEpics[key]);

export const rootEpic = combineEpics(
  ...authEpicsAr,
  ...entityDataEpicsAr,
);


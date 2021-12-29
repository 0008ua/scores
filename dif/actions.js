// storeData actionTypes
  ADD: `${entityName}/dataService add`,
  REMOVE: `${entityName}/dataService remove`,
  GET_ALL: `${entityName}/dataService getAll`,
  GET_BY_ID: `${entityName}/dataService getById`,
  GET_WITH_QUERY: `${entityName}/dataService getWithQuery`,
  UPDATE: `${entityName}/dataService update`,
  ERROR: `${entityName}/dataService error`,

// storeData actions
  add: createAction(actionTypes.ADD),
  remove: createAction(actionTypes.REMOVE),
  getAll: createAction(actionTypes.GET_ALL),
  getById: createAction(actionTypes.GET_BY_ID),
  getWithQuery: createAction(actionTypes.GET_WITH_QUERY),
  update: createAction(actionTypes.UPDATE), // as upsert
  error: createAction(actionTypes.ERROR),
  ...entityActions

// entity actionTypes
entityName/addOne
entityName/addMany
entityName/setOne
entityName/setMany
entityName/setAll
entityName/removeOne
entityName/removeMany
entityName/removeAll
entityName/updateOne
entityName/updateMany
entityName/upsertOne
entityName/upsertMany

// entity actions
addOne
addMany
setOne
setManн
setAll
removeOne
removeMany
removeAll
updateOne
updateMany
upsertOne
upsertMany

// entity selectors
selectAll: ƒ(value)
selectById: ƒ(value)
selectEntities: ƒ(value)
selectIds: ƒ(value)
selectTotal: ƒ(value)
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createEpicMiddleware } from 'redux-observable';


// import { rootReducer } from './store/reducers';
// import { rootEpic } from './store/epics';
import { store } from './store';

import App from './App';

import './styles.scss';

// import "materialize-css/dist/js/materialize.min.js";

// const epicMiddleware = createEpicMiddleware();
// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(
//       epicMiddleware
//     )
//   )
// );

// epicMiddleware.run(rootEpic);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

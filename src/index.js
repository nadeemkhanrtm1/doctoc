import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from "aws-amplify";
import config from "./config.json";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// Amplify.configure({
//   Auth:{
//       mandatotySignIn: true,
//       region : config.cognito.REGION,
//       userPoolId : config.cognito.USER_POOL_ID,
//       userPoolWebClientId : config.cognito.APP_CLIENT_ID
//   }
// });

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
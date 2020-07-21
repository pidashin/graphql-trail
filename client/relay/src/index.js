import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import RelayEnvironment from './RelayEnvironment'
import { AUTH_TOKEN } from './constants'
import Login from './pages/login'

import './global.scss'

const isLoggedIn = localStorage.getItem(AUTH_TOKEN)

const Main = () => {
  return isLoggedIn ? <App /> : <Login />
}

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Main />
  </RelayEnvironmentProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

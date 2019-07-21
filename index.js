/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './src/reducers';
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
const appRedux = () => (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRedux);
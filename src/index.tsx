import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {thunk, ThunkDispatch } from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Actiontypes } from './state/action/shopping.action';

export type AppDispatch = ThunkDispatch<any, void, Actiontypes>;



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

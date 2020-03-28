import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import {createStore, applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";



// connect redux vs react
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/index"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Ket noi store chứa và reducer
const store = createStore(
  rootReducer,
  // kiểm tra redux trên trình duyệt- apply thunk vao
  composeEnhancers(applyMiddleware(thunk))
  );

  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

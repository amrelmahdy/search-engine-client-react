import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk" // allow asynchronous actions
// import logger from "redux-logger";
import rootReducer from "./store/reducers/root_reducer";
import {Provider} from "react-redux";


const applied_middleware = process.env.NODE_ENV === 'development' ? applyMiddleware( thunk) : applyMiddleware(thunk);
const store = createStore(rootReducer, {}, applied_middleware);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';


import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

const reflection = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '', 
}

const reflectReducer = (state = reflection, action) => {
    switch (action.type) {
        case 'ADD_FEELINGS':
            return {
                ...state,
                feeling: Number(action.payload)
            };
        case 'ADD_UNDERSTANDING':
            return {
                ...state,
                understanding: Number(action.payload)
            };

        case 'ADD_SUPPORT':
            return {
                ...state,
                support: Number(action.payload)
            };

        case 'ADD_COMMENTS':
            return {
                ...state,
                comments: (action.payload)
            };    
            
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        reflectReducer,
    }), 
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();

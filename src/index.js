import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {Routes} from './routes';

const initialState = {
    name: 'World',
    greeting: 'Hello'
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_NAME': return {
            ...state,
            name: action.name
        }
        case 'TOGGLE_GREETING': return {
            ...state,
            greeting: state.greeting === 'Bye' ? 'Hello' : 'Bye'
        }
        default: return state;
    }
}

let store = createStore(reducer);

let renderFunc = () => ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

renderFunc();
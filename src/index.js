import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './routes';
import {createStore} from 'redux';

class Provider extends React.Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    static childContextTypes = {
        store: React.PropTypes.object
    }

    render() {
        return this.props.children;
    }
}

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
import {
    UPDATE_NAME,
    TOGGLE_GREETING
} from '../constants';

const initialState = {
    name: 'World',
    greeting: 'Hello'
}

export function helloWorldReducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME: return {
            ...state,
            name: action.name
        }
        case TOGGLE_GREETING: return {
            ...state,
            greeting: state.greeting === 'Bye' ? 'Hello' : 'Bye'
        }
        default: return state;
    }
}
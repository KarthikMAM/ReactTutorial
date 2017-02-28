import { UPDATE_NAME } from '../constants';

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        name
    }
}
import { DATA_LOADED, DRAWER_TOGGLED } from '../actions/types';
import { initialState } from '../store';

export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case DATA_LOADED: {
            return { content: action.content, dataLoaded: true, drawerToggled: state.drawerToggled };
        }
        case DRAWER_TOGGLED: {
            return { content: state.content, dataLoaded: state.dataLoaded, drawerToggled: true };
        }
        default:
            return state;
    }

}
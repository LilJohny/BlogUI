import { DATA_LOADED, DRAWER_TOGGLED } from '../actions/types';
export default function rootReducer(state, action) {
    switch (action.type) {
        case DATA_LOADED: {
             return {content: action.content, dataLoaded:true, drawerToggled:state.drawerToggled}
        }
        case DRAWER_TOGGLED: {
            return { content:state.content, dataLoaded:state.dataLoaded, drawerToggled:true }
        }
        default:
            return state;
    }
}
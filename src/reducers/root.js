import { NEW_DATA_LOADED, DRAWER_TOGGLED } from '../actions/types';
import { initialState } from '../store';

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case DRAWER_TOGGLED: {
            return { categories: state.categories, authors: state.authors, articles: state.articles, drawerToggled: true };
        }
        case NEW_DATA_LOADED: {
            const keyValue = action.keyValue;
            const content = action.content;
            console.log(action);
            let newState = { categories: state.categories, authors: state.authors, articles: state.articles, drawerToggled: state.drawerToggled };;
            newState[keyValue] = content;
            return newState;
        }
        default:
            return state;
    }

}
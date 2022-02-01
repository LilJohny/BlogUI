import { NEW_DATA_LOADED, DRAWER_TOGGLED, NAME_CHANGED, SURNAME_CHANGED, MAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';
import { initialState } from '../store';

export default function rootReducer(state = initialState, action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case DRAWER_TOGGLED: {
            return { categories: state.categories, authors: state.authors, articles: state.articles, drawerToggled: action.value, formData: state.formData };
        }
        case NEW_DATA_LOADED: {
            const keyValue = action.keyValue;
            const content = action.content;
            let newState = { categories: state.categories, authors: state.authors, articles: state.articles, drawerToggled: state.drawerToggled, formData: state.formData };;
            newState[keyValue] = content;
            return newState;
        }
        case NAME_CHANGED: {
            const name = action.data;
            let formData = state.formData;
            const newFormData = { ...formData, name: name };
            return { categories: state.categories, authors: state.authors, articles: state.articles, drawerToggled: state.drawerToggled, formData: newFormData };
        }
        case SURNAME_CHANGED: {
            const surname = action.data;
            let formData = state.formData;
            const newFormData = { ...formData, surname: surname };
            return { categories: state.categories, authors: state.authors, articles: state.articles, drawerToggled: state.drawerToggled, formData: newFormData };
        }
        case MAIL_CHANGED: {
            const mail = action.data;
            let formData = state.formData;
            const newFormData = { ...formData, mail: mail };
            return { categories: state.categories, authors: state.authors, articles: state.articles, drawerToggled: state.drawerToggled, formData: newFormData };
        }
        case PASSWORD_CHANGED: {
            const password = action.data;
            let formData = state.formData;
            const newFormData = { ...formData, password: password };
            return { categories: state.categories, authors: state.authors, articles: state.articles, drawerToggled: state.drawerToggled, formData: newFormData };
        }
        default:
            return state;
    }

}
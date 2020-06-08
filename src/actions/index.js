import { newDataLoaded, drawerToggled, nameChanged, surnameChanged, mailChanged, passwordChanged } from "./creators";

const loadData = (links) => (dispatch) => {
    for (let i = 0; i < links.length; i++) {
        fetch(links[i]).then(resp => {
            return resp.json();
        }).then(content => {
            const tokens = links[i].split('/');
            dispatch(newDataLoaded(tokens[tokens.length - 1], content));
        });
    };
}
const formDataChange = (data, dataType) => (dispatch) => {
    switch (dataType) {
        case "name": {
            dispatch(nameChanged(data));
            break;
        }
        case "surname": {
            dispatch(surnameChanged(data));
            break;
        }
        case "mail": {
            dispatch(mailChanged(data));
            break;
        }
        case "password": {
            dispatch(passwordChanged(data));
            break;
        }
        default:
            return;
    }
}
const toggleDrawer = (open) => (dispatch) => {
    dispatch(drawerToggled(open));
}
export { loadData, toggleDrawer, formDataChange };
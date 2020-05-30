import { dataLoaded, drawerToggled } from "./creators";

const loadData = (link) => (dispatch) => {
    fetch(link).then(resp => {
        return resp.json();
    }).then(content => {
        dispatch(dataLoaded(content));
    });
}

const toggleDrawer = () => (dispatch) => {
    dispatch(drawerToggled());
}
export { loadData, toggleDrawer };
import { dataLoaded, drawerToggled } from "./creators";

const loadData = (link) => (dispatch) => {
    fetch('http://localhost:3001/articles').then(resp => {
        return resp.json();
    }).then(body => {
        dispatch(dataLoaded(body));
    });
}

const toggleDrawer = () => (dispatch) => {
    dispatch(drawerToggled());
}
export { loadData, toggleDrawer };
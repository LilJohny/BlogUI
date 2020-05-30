import { newDataLoaded, drawerToggled } from "./creators";

const loadData = (links) => (dispatch) => {
    for (let i = 0; i < links.length; i++){
        fetch(links[i]).then(resp => {
            return resp.json();
        }).then(content => {
            const tokens = links[i].split('/');
            console.log(content);
            dispatch(newDataLoaded(tokens[tokens.length - 1], content));
        });
    };
}

const toggleDrawer = () => (dispatch) => {
    dispatch(drawerToggled());
}
export { loadData, toggleDrawer };
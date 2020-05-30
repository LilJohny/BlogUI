import { newDataLoaded, drawerToggled } from "./creators";

const loadData = (links) => (dispatch) => {
    for (let i = 0; i < links.length; i++){
        fetch(links[i]).then(resp => {
            return resp.json();
        }).then(content => {
            const tokens = links[i].split('/');
            dispatch(newDataLoaded(tokens[tokens.length - 1], content));
        });
    };
}

const toggleDrawer = (open) => (dispatch) => {
    console.log(open);
    dispatch(drawerToggled(open));
}
export { loadData, toggleDrawer };
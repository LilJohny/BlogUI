import axios from "axios";
import { dataLoaded, drawerToggled } from "./creators";

const loadData = (link) => (dispatch) => {
    axios.get(link).then(resp => {
        return resp.json();
    }).then(content => {
        dispatch(dataLoaded(content));
    });
}

const toggleDrawer = () => (dispatch) => {
    dispatch(drawerToggled());
}
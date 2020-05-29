import { DATA_LOADED, DRAWER_TOGGLED } from "./types";
const dataLoaded = (data) => ({ type: DATA_LOADED, content: data });
const drawerToggled = () => ({type: DRAWER_TOGGLED});
export { dataLoaded, drawerToggled };
import { NEW_DATA_LOADED, DATA_LOADED, DRAWER_TOGGLED } from "./types";

const newDataLoaded = (key, content) => ({ type: NEW_DATA_LOADED, content: content, keyValue: key });
const dataLoaded = () => ({type:DATA_LOADED});
const drawerToggled = () => ({ type: DRAWER_TOGGLED });

export { newDataLoaded , dataLoaded, drawerToggled };
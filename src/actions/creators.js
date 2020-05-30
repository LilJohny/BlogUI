import { DATA_LOADED, DRAWER_TOGGLED } from "./types";

const dataLoaded = (content) => ({ type: DATA_LOADED, content });
const drawerToggled = () => ({ type: DRAWER_TOGGLED });

export { dataLoaded, drawerToggled };
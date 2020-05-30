import { NEW_DATA_LOADED, DRAWER_TOGGLED } from "./types";

const newDataLoaded = (key, content) => ({ type: NEW_DATA_LOADED, content: content, keyValue: key });
const drawerToggled = (open) => ({ type: DRAWER_TOGGLED, value:open });

export { newDataLoaded , drawerToggled };
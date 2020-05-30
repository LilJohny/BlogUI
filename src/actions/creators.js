import { NEW_DATA_LOADED, DRAWER_TOGGLED, NAME_CHANGED, SURNAME_CHANGED, MAIL_CHANGED, PASSWORD_CHANGED } from "./types";

const newDataLoaded = (key, content) => ({ type: NEW_DATA_LOADED, content: content, keyValue: key });
const drawerToggled = (open) => ({ type: DRAWER_TOGGLED, value: open });
const nameChanged = (name) => ({ type: NAME_CHANGED, value: name });
const surnameChanged = (surname) => ({ type: SURNAME_CHANGED, value: surname });
const mailChanged = (mail) => ({ type: MAIL_CHANGED, value: mail });
const passwordChanged = (password) => ({ type: PASSWORD_CHANGED, value: password });
export { newDataLoaded, drawerToggled, nameChanged, surnameChanged, mailChanged, passwordChanged };
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './reducers/root';
import ReduxThunk from 'redux-thunk';

const initialState = { content: [], dataLoaded: false, drawerToggled: false };

export default function configStore() {
  console.log(ReduxThunk);
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
export { initialState };
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './reducers/root';
import ReduxThunk from 'redux-thunk';

const initialState = { content: [], dataLoaded:false };

export default function configStore() {
    return createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(ReduxThunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );
  }
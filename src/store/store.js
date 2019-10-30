import {createStore,applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import visionsReducer from './visionsReducer';
import {combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';        // npm install --save redux-thunk


const storeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const reducers=combineReducers({reducer,visionsReducer});
//const store=createStore(reducers,composeWithDevTools());
const store=createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)))
export default store;


// or we can use an initial state file to save all states, as following
/* export default function configureStore(initialState) {
    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
  } */
  
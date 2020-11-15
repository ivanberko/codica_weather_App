import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import weatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  dataWeather: weatherReducer,
});

const enhancer = applyMiddleware(thunk);
export const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);

import { createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export default function configureStore(preloadedState) {
    const store = createStore(reducers, preloadedState, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return store;
}
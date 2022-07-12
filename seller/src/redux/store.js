import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    const invariant = require('redux-immutable-state-invariant').default;
    middleware.push(invariant(), createLogger({ collapsed: true }));
}




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* istanbul ignore next */
export const configStore = (initialState = {}, additionalMiddleware = []) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancer(applyMiddleware(...additionalMiddleware, ...middleware)),
    );

    sagaMiddleware.run(rootSaga);


    return {
        persistor: persistStore(store),
        store,
    };
};
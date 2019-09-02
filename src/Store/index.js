import  createSagaMiddleware from 'redux-saga'
import { compose, applyMiddleware, createStore } from 'redux';
import rootSaga from './sagas';
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(
    reducer,
    enhancer
)

sagaMiddleware.run(rootSaga);

export default store;

import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import root_reducer from '../reducers';
import root_saga from '../sagas';

// const store = createStore(rootReducer);
const saga_middleware = createSagaMiddleware();
const store = configureStore({
    reducer: root_reducer,
    middleware: () => [saga_middleware]
});

saga_middleware.run(root_saga);

export default store;
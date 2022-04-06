import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from 'reducers'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from 'saga'

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleWare)))
sagaMiddleWare.run(rootSaga)

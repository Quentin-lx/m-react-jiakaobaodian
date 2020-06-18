import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import Immutable from 'immutable'

const sagaMiddleware = createSagaMiddleware()
const initState = Immutable.Map()
const store = createStore(
    reducers,
    initState,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagas)

export default store
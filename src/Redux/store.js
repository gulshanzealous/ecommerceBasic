import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import {createLogger} from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reduxThunk from 'redux-thunk'
import { loadState, saveState } from './localStorage'

const history = createHistory()

const middleware = [
    routerMiddleware(history),
    createLogger(),
    reduxThunk
]

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const persistedState = loadState()

const store = createStore(
    rootReducer,
    persistedState,
    enhancers
)

store.subscribe(()=>{
    // console.log(store.getState())
    saveState(store.getState())
})

export { history }

export { store }
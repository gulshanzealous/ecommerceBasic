import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { store, history } from './Redux/store'
import { Home, Items,Orders } from './Layouts'

const AllRoutes = (
    <Provider store = {store}>
        <ConnectedRouter history={history} >
            <App>
                <Route exact path = "/" component = { Home } />
                <Route path = "/products" component = { Home } />
                <Route path="/items" component={Items}/>  
                 <Route path="/orders" component={Orders}/>
            </App>
        </ConnectedRouter>
    </Provider>
)

ReactDOM.render(AllRoutes, document.getElementById('root'));



// registerServiceWorker();

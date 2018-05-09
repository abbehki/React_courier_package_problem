import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';
import {Router, Route, Link,Switch} from "react-router-dom";
import history from './history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root_reducer';
import saga from './root_saga';

import importedComponent from 'react-imported-component';
import Loading from './loading';


import Poster from './App/poster/poster';
import Test from './App/test/test';
import Maps from './App/maps/maps';

if (module.hot) {
    module.hot.accept()
}

// const AsyncDynamicPAge = importedComponent(
//     () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
//     {
//       LoadingComponent: Loading
//     }
//   );
//   const AsyncNoMatch = importedComponent(
//     () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
//     {
//       LoadingComponent: Loading
//     }
//   );

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga)

const Index=()=>{
    return( 
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Poster}/>
                <Route exact path="/test" component={Test}/>
                {/* <Route exact path="/dynamic" component={AsyncDynamicPAge} />
                <Route component={AsyncNoMatch} /> */}
                <Route exact path="/maps" component={Maps}/>
            </Switch>
        </Router>
    </Provider>
    );
};

ReactDom.render(<Index/>,document.getElementById("index"));
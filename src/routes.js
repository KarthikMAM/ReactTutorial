import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import {
    HelloWorldPage,
    App
} from './containers';

export function Routes() {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={HelloWorldPage} />
                <Route path='/:name' component={HelloWorldPage} /> 
            </Route>
        </Router>
    );
}
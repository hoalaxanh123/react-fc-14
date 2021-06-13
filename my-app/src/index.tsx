import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LINK_URL } from './constants';
import Homepage from './views/home';
import About from './views/about';
import Contact from './views/contact';
import NotFound from './views/404';
import Login from './views/login';
import Management from './views/admin';
import { PrivateRoute } from './routes/privateRoute';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path={LINK_URL.homepage} exact>
                <Homepage />
            </Route>

            <Route path={LINK_URL.about} exact>
                <About />
            </Route>

            <Route path={LINK_URL.contact} exact>
                <Contact />
            </Route>

            <PrivateRoute path={LINK_URL.management} exact>
                <Management />
            </PrivateRoute>

            <Route path={LINK_URL.login} exact>
                <Login />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root'),
);

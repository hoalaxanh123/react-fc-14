import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LINK_URL } from './constants';
import Homepage from './views/home';
import Quiz from './views/quiz';
import ResultPage from './views/report';
import NotFound from './views/404';
import Forbidden from './views/403';
import Login from './views/login';
import Management from './views/admin';
import About from './views/about';
import { PrivateRoute } from './routes/privateRoute';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path={LINK_URL.homepage} exact>
                <Homepage />
            </Route>

            <PrivateRoute path={LINK_URL.quiz} exact>
                <Quiz />
            </PrivateRoute>

            <PrivateRoute path={LINK_URL.result} exact>
                <ResultPage />
            </PrivateRoute>
            <PrivateRoute path={LINK_URL.management} exact>
                <Management />
            </PrivateRoute>

            <Route path={LINK_URL.login} exact>
                <Login />
            </Route>
            <Route path={LINK_URL.about} exact>
                <About />
            </Route>

            <Route path={LINK_URL.test_403} exact>
                <Forbidden />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root'),
);

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import Discover from './modules/Discover'
import Recipe from './modules/Recipe'
import Menu from './modules/Menu'
import Nutrition from './modules/Nutrition'
import Preference from './modules/Preference'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/*<Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>*/}
            {/* add the new route */}
            {/*<Route path="/about" component={About}/>*/}
            <IndexRoute component={Home}/>
            {/*<Route path="/Discover" component={Discover}/>
            <Route path="/Recipe" component={Recipe}/>
            <Route path="/Menu" component={Menu}/>
            <Route path="/Nutrition" component={Nutrition}/>
            <Route path="/Preference" component={Preference}/>*/}
        </Route>
    </Router>
), document.getElementById('app'));

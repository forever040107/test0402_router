import React from 'react'
import ToggleNav from '../containers/ToggleNav';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import PageA from './PageA';
import PageB from './PageB';

const Content = () => (
    <div id="page-content-wrapper">
        <ToggleNav />
        <div className="container-fluid">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/aa" component={PageA}/>
                <Route path="/bb" component={PageB}/>
            </Switch>
        </div>
    </div>
)

export default Content
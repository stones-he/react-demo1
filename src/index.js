import React from 'react'
import {
    render
} from 'react-dom'

import {
    HashRouter as Router, //BrowserRouter
    Route,
    Switch,
    Redirect
} from 'react-router-dom'


import App from './App'

import {mainRouter } from './routes'

import './index.less'

render(
    // <App / > ,
    <Router>
        <Switch>
            <Route path="/admin" render={(routerProps) => {
                // TODO check login authority
                return <App {...routerProps}/>
            }} />
            {
                mainRouter.map(route => {
                    return <Route key={route.pathname} path={route.pathname} component={route.component} />
                })
            }
            <Redirect to="/admin" from="/" exact/> 
            <Redirect to="/404" /> 
        </Switch>
    </Router>,
    document.querySelector('#root')
)
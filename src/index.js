import React from 'react'
import {
    render
} from 'react-dom'

import {
    // BrowserRouter as Router, //BrowserRouter
    HashRouter as Router, 
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom'

import {DefaultLayout} from './components'

import App from './App'

import {mainRouter } from './routes'

import './index.less'

render(
    <Router>
        <DefaultLayout>
        <Link to="/">back</Link>
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
    </DefaultLayout>
    </Router>,
    document.querySelector('#root')
)
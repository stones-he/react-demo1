import React, { Component } from 'react';
import {Route ,Switch, Redirect, Link} from 'react-router-dom'
import {adminRouter} from './routes'

const testHOC = (WrappedComponent) =>  {
    return class HOCComponent extends Component {
        render() {
            return ( 
                <>
                    <WrappedComponent />
                    <div> test hoc </div>
                </>
            )
        }
    }
}
@testHOC  // 2
class App extends Component {
    render() {
        return (
            <div>
                <div>here is common area!</div>
                <ul>
                    <li><Link to="/login">登录</Link></li>
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin/settings">settings</Link></li>
                    <li><Link to="/admin/artical">artical</Link></li>
                    <li><Link to="/admin/todo">todo</Link></li>
                    <li><Link to="/admin/counter">counter</Link></li>
                    <li><Link to="/admin/counter2">counter2</Link></li>
                    <li><Link to="/admin/reduxdemo">reduxdemo</Link></li>
                    <li><Link to="/admin/sreduxdemo">sreduxdemo</Link></li>
                </ul>
                <Switch>
                    {
                        adminRouter.map(route =>{
                            return <Route
                                    key={route.pathname}
                                    path={route.pathname}
                                    exact={route.exact}
                                    render ={(routerProps) =>{
                                        return <route.component {...routerProps} />
                                    }}
                                    />
                        })
                    }
                    <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
                    <Redirect to="/404" />
                </Switch>
            </div>
        );
    }
}

// export default testHOC(App);  //1
export default App;  // 2
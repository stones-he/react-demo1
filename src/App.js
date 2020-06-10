import React, { Component } from 'react';
import {Route ,Switch, Redirect} from 'react-router-dom'
// import { Button } from 'antd'

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
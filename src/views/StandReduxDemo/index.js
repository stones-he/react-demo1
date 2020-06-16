import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import {Blog} from './components'
export default class StandReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <Blog />
            </Provider>
        )
    }
}

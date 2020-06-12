import React, { Component } from 'react'
import {CardList} from './components'
import { Provider } from 'react-redux'

import store from './store'
window.store = store
export default class ReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <CardList />
            </Provider>
        )
    }
}

import React, { Component } from 'react'
import {CardList} from './components'
import store from './store'
window.store = store
export default class ReduxDemo extends Component {
    render() {
        return (
            <div>
                <CardList store={store}/>
            </div>
        )
    }
}

import React, { Component } from "react"
import { CounterConsumer } from '../store'

export default class CounterBnt extends Component {
    
    render() {
        return (
            <CounterConsumer>
                {
                    ({onIncrementCount,onDecrementCount}) => {
                        return (
                            <button onClick={this.props.children ==='-' ? onDecrementCount : onIncrementCount}>{this.props.children}</button>
                        )
                    }
                }
            </CounterConsumer>
        )
    }
}

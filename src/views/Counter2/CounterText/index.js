import React, { Component } from 'react'
import { CounterConsumer } from '../store'

export class CounterText extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    (ctx) => {
                        console.log(ctx)
                        return (
                            <span>{ctx.count}</span>
                        )
                    }
                }
            </CounterConsumer>
        )
    }
}

import React, { Component } from 'react'
import { CounterProvider } from './store'
import  CounterBtn  from './CounterBtn'
import { CounterText } from './CounterText'


export default class Counter2 extends Component {
    render() {
        return (
            <CounterProvider>
                <div>
                    <CounterBtn>-</CounterBtn>
                    <CounterText></CounterText>
                    <CounterBtn>+</CounterBtn>
                </div>
            </CounterProvider>
        )
    }
}

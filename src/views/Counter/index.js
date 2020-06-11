//creatContext 是react提供的一个用于跨组件传值的方法
import React, { Component, createContext } from 'react'
//createContext这个方法的结果是一个对象，里面有provider和consumer
//Provider用于提供状态
//Consumer用于消费状态
const {
    Provider,
    Consumer: CounterConsumer // 解构出来重新赋值给一个变量对象CounterConsumer
} = createContext()

//封闭一个基于的Provider，因为直接使用Provider不方便管理应用自己的状态
class CounterProvider extends Component {
    constructor () {
        super()
        //这里的状态就是共享的，任何CounteProvider的子孙组件 都可以CounterConsumer来接收这个状态值
        this.state = {
            count:0
        }
    }
    increamentCount = () => {
        this.setState ({
            count:this.state.count + 1
        })
    }
    decreamentCount = () => {
        this.setState ({
            count:this.state.count - 1
        })
    }
    render() {
        return (
            //使用Provider这个组件，经必须要有一个value值，这个value可以传递任何的数据，一般用于传递一个对象
            <Provider value={{
                count: this.state.count,
                onIncreamentCount: this.increamentCount,
                onDecreamentCount: this.decreamentCount
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

class CounterBnt extends Component {
    
    render() {
        return (
            <CounterConsumer>
                {
                    ({onIncreamentCount,onDecreamentCount}) => {
                        return (
                            <button onClick={this.props.children ==='-' ? onDecreamentCount : onIncreamentCount}>{this.props.children}</button>
                        )
                    }
                }
            </CounterConsumer>
        )
    }
}
class CounterText extends Component {
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
export default class Counter extends Component {
    render() {
        return (
            <CounterProvider>
                <div>
                    <CounterBnt>-</CounterBnt>
                    <CounterText></CounterText>
                    <CounterBnt>+</CounterBnt>
                </div>
            </CounterProvider>
        )
    }
}

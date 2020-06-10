// import React, { Component } from 'react'   // --1
import React, { PureComponent } from 'react' // --2

export default class TodoItem extends PureComponent {
    handleItemCheck = () => {
        // this.props.handleItemCheck(this.props.id)
        const {
            handleItemCheck = () => {},
            id
        } = this.props
        handleItemCheck(id)
    }
    handleDelete = () => {
        const {
            handleItemDelete ,
            id
        } = this.props
        console.log(id)
        handleItemDelete(id)
    }
    //用来判断是否需要更新当前组件 --1
    // shouldComponentUpdate(nextProps,nextState) {
    //     return nextProps.ok !== this.props.ok
    // }
    render() {
        console.log('render TodoItem')
        return (
            <li>
                <input type="checkbox" 
                    checked={this.props.ok} 
                    onChange={this.handleItemCheck}
                />
                    <span>{this.props.title} {this.props.ok? "ok":"no"}</span>
                    <span onClick={this.handleDelete}> [ X ]</span>
            </li>
        )
    }
}

import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {
                this.props.todos.map((todo) => {
                    return (
                    <TodoItem key={todo.id} {...todo} handleItemCheck={this.props.handleItemCheck} handleItemDelete={this.props.handleItemDelete} />
                    )
                })
                }
            </div>
        )
    }
}

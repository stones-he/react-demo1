import React, { Component, createRef } from 'react'
import TodoList from './TodoList'
import  {getTodos} from '../../services'

export default class Todos extends Component {
    constructor() {
        super()
        this.state = {
            todoValue: "",
            todos: [],
            isLoading: false
        }
        this.inputDom = createRef()
    }
    componentDidMount() {
        //
        this.setState({
            isLoading: true
        })
        //
        getTodos().then((resp) => {
            // console.log(resp)
            if (resp.status === 200) {
                this.setState({
                    todos: resp.data
                })
            } else {
                // other http status deal
            }
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }
    handleInputValue = (e) => {
        this.setState({
            todoValue:e.currentTarget.value
        })
    }
    handleKeyup = (e) => {
        if(e.keyCode === 13) {
            this.handleAddBtn()
        }
    }
    handleAddBtn = () => {
        if(this.state.todoValue === '') {
            return ;
        }
        this.setState({
            todos: [...this.state.todos, {
                id: Math.random(),
                title: this.state.todoValue,
                completed: false
            }],
            todoValue: ""
        }, () => {
            this.inputDom.current.focus()
        })
    }
    handleItemDelete = (id) => {
        this.setState((preState) => {
            return {
                todos: preState.todos.filter(todo => todo.id !== id)
            }
        })
    }
    handleItemCheck = (id) => {
        this.setState((prevState) => {
            return {
                todos: prevState.todos.map((todo) => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }

        }, () => {
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.state.todoValue}
                        onChange={this.handleInputValue}
                        onKeyUp={this.handleKeyup}
                        ref={this.inputDom}
                    /> <button onClick={this.handleAddBtn}>ADD</button>
                </div>
                {
                    this.state.isLoading 
                    ? 
                    <div>loading...</div>
                    :
                    <TodoList 
                        title="Task List" 
                        todos={this.state.todos} 
                        handleItemCheck={this.handleItemCheck} 
                        handleItemDelete={this.handleItemDelete} 
                    />
                }
                <span />
            </div>
        )
    }
}

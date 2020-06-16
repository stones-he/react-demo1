import React, { Component } from 'react'

export default class BlogDetail extends Component {
    render() {
        return (
            <li>
                <h3>{this.props.id} :: {this.props.title} </h3>
                <p> {this.props.body}</p>
            </li>
        )
    }
}

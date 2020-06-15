import React, { PureComponent } from 'react'

export default class CardItem extends PureComponent {
    render() {
        console.log("card  item render ",this.props,this.props.adecAmount)
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.price}</td>
                <td>
                    <button onClick={this.props.adecAmountAsync.bind(this,this.props.id)}> delay -</button>
                    <button onClick={this.props.adecAmount.bind(this,this.props.id)}>-</button>
                    <span>{this.props.amount}</span>
                    <button onClick={this.props.aincAmount}>+</button>
                    <button onClick={this.props.aincAmountAsync}>delay +</button>
                </td>
                <td> modify del </td>
            </tr>
        )
    }
}

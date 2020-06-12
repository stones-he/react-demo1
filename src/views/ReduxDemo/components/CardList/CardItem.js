import React, { PureComponent } from 'react'
import { incAmount, decAmount } from '../../actions/card'

export default class CardItem extends PureComponent {
    render() {
        console.log("card  item render ",this.props)
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.title}</td>
                <td>{this.props.price}</td>
                <td>
                    <button onClick={() => {
                        this.props.store.dispatch(decAmount(this.props.id))
                    }}>-</button>
                    <span>{this.props.amount}</span>
                    <button onClick={ () => {
                        this.props.store.dispatch(incAmount(this.props.id))
                    }}>+</button>
                </td>
                <td> modify del </td>
            </tr>
        )
    }
}

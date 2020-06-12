import React, { Component } from 'react'
import CardItem from './CardItem'

export default class CardList extends Component {
    constructor() {
        super()
        this.state = {
            cardList: []
        }
    }
    getState = ()=>{
        this.setState({
            cardList:this.props.store.getState().card
        })
    }
    componentDidMount() {
        this.getState()
        this.props.store.subscribe(this.getState)
    }
    render() {
        console.log("card list render", this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>title</td>
                        <td>price</td>
                        <td>amount</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.cardList.map((card) => {
                        return (
                            <CardItem key={card.id}
                                {...card} 
                                store={this.props.store}
                            />
                        )
                    })
                    
                    }  
                </tbody>
            </table>
        )
    }
}

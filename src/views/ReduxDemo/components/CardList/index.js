import React, { Component } from 'react'
import CardItem from './CardItem'
import { connect } from 'react-redux'
import { incAmount, decAmount } from '../../actions/card'


 class CardList extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         cardList: []
    //     }
    // }
    // getState = ()=>{
    //     this.setState({
    //         cardList:this.state.card
    //     })
    // }
    // componentDidMount() {
        // this.getState()
        // this.props.subscribe(this.getState)
    // }
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
                    this.props.cardList.map((card) => {
                        return (
                            <CardItem key={card.id}
                                {...card} 
                                aincAmount={()=>this.props.incAmount(card.id)}
                                // adecAmount={()=>this.props.decAmount(card.id)}
                                // -- 两种不同的使用方式
                                adecAmount={this.props.decAmount}
                            />
                        )
                    })
                    
                    }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("list state", state, ownProps)
    return {
        cardList: state.card,
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         aincAmount: (id) => {
//             dispatch(incAmount(id))
//         },
//         adecAmount: (id) => {
//             dispatch(decAmount(id))
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CardList)
// -- 通过直接把action creator传给connect会自动添加dispatch特性
export default connect(mapStateToProps,  { incAmount, decAmount })(CardList)
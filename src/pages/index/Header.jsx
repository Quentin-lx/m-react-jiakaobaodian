import React, { Component } from 'react'
import { Headerstyle } from 'styles/index-styled.js'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { GETNOWCITY } from '../action-types'

const mapStateToProps = state =>{
    return({
        nowcity:state.getIn(['mainreducers','nowcity'])
    })
}


class Header extends Component {
    
    
    linktopt(){
        this.props.history.push({
            pathname:'/pt'
        })
    }
    render() {
        console.log(this.props)
        return (
            <Headerstyle>
                <span className="type_position" onClick={this.linktopt.bind(this)}>
                    {this.props.nowcity}-
                    <i className="car-type">小车</i>
                </span>
                <div className="mine"></div>
                 
                
            </Headerstyle>
        )
    }
}
export default connect( mapStateToProps)(withRouter(Header))
import React, { Component } from 'react'
import { PTPositionstyle } from 'styles/PT-styled'
// import { get } from 'utils/http.js'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state =>{
    return({
        nowcity:state.getIn(['mainreducers','nowcity'])
    })
}
class PTposition extends Component {

    // async componentDidMount(){
    //     let result = await get({
    //         url:'/city',
            
    //     })
    //     console.log(result)

    // }
    
    linktoPosition(){
        this.props.history.push({
            pathname:'/pt/position'
        })
    }
    render() {
        // console.log(this.props.nowcity)
        return (
            <PTPositionstyle onClick={this.linktoPosition.bind(this)}>
                <div className="city-name"><i></i><span>{this.props.nowcity}</span></div>
                <div className="position_status"><span>定位成功</span><i className='iconfont'>&#xe744;</i></div>
            </PTPositionstyle>
        )
    }
}

export default connect( mapStateToProps )(withRouter(PTposition))
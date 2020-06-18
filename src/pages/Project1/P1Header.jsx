import React, { Component } from 'react'
import { P1Headerstyle } from 'styles/p1-styled.js'
import { withRouter } from 'react-router-dom'
 class P1Header extends Component {
    backto(){
        this.props.history.goBack() 
    }
    render() {
        return (
            <P1Headerstyle>
                <div onClick={this.backto.bind(this)} className="icon iconfont">&#xe743;</div>
                科目一
            </P1Headerstyle>
        )
    }
}
export default withRouter(P1Header)
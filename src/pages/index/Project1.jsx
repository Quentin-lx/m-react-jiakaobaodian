import React, { Component } from 'react'
import { Projectstyle14 } from 'styles/index-styled.js'

import { withRouter,NavLink } from 'react-router-dom'

class Project1 extends Component {
    linktoP1(){
        this.props.history.push({
            pathname:'/p1'
        })
        
    }
    render() {
        
        return (
            <Projectstyle14>
                <div className="module-title">
                    <h2>科目一</h2>
                    <span onClick={this.linktoP1.bind(this)}>北京小车(C1/C2)理论考试<i></i></span>
                </div>
                <div className="project-detail">
                    <NavLink to='/p1/sp' className="detail1 details"><div className="detail-icon icon1"></div><div className="detail-title">顺序练习</div></NavLink>
                    <div className="detail2 details"><div className="detail-icon icon2"></div><div className="detail-title">模拟考试</div></div>
                    <div className="detail3 details"><div className="detail-icon icon3"></div><div className="detail-title">章节练习</div></div>
                    <div className="detail4 details"><div className="detail-icon icon4"></div><div className="detail-title">考前秘卷</div></div>
                </div>
            </Projectstyle14>
        )
    }
}

export default withRouter(Project1)

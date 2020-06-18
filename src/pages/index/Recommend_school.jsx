import React, { Component } from 'react'
import { RecommendSchoolstyle } from 'styles/index-styled.js'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
const mapStateToProps = state =>{
    return ({
        pyname:state.getIn(['mainreducers','nowcitypyname'])
    })
}


class Recommendschool extends Component {

    
    render() { 
        // console.log(this.props)
        return (
            <RecommendSchoolstyle>
                <NavLink 
                to={this.props.match.url+`rs/${this.props.pyname}`}
                className="module-title"
                
                >
                    <h2>推荐驾校</h2>
                    <span>更多</span>
                </NavLink>
                <div className="recommend-detail">
                    <div className="recommend-school">
                        <img src="http://pic2.58cdn.com.cn/nowater/jxedt/201910/n_v283abe836b25c447291324b8d410e83c1_a0adf792bca57108.jpg?h=60&w=80" alt=""/>
                        <div className="school-detail">
                            <div className="school-title_star">
                                <div className="school-title">东方时尚驾校亚运村报名点</div>
                                <div className="school-recstar"></div>
                            </div>
                            <div className="school-price_comment">
                                <div className="school-price"><span>3300</span>元起</div>
                                <div className="school-comment"><span>108</span>条评论</div>
                            </div>
                        </div>
                    </div>
                    <div className="recommend-school">
                        <img src="http://pic8.58cdn.com.cn/www/n_v22408865ac3d543b9a514d3d9d6d5a008_f0046fed25a1d1ba.jpg?h=60&w=80" alt=""/>
                        <div className="school-detail">
                            <div className="school-title_star">
                                <div className="school-title">东方时尚驾校龙湖天街报名点</div>
                                <div className="school-recstar"></div>
                            </div>
                            <div className="school-price_comment">
                                <div className="school-price"><span>5200</span>元起</div>
                                <div className="school-comment"><span>38</span>条评论</div>
                            </div>
                        </div>
                    </div>
                    <div className="recommend-school">
                        <img src="http://pic1.58cdn.com.cn/nowater/jxt/n_v2b56ed1ba1f8c466d8437da2c69606ce1.png?h=60&w=80" alt=""/>
                        <div className="school-detail">
                            <div className="school-title_star">
                                <div className="school-title">远方驾校</div>
                                <div className="school-recstar"></div>
                            </div>
                            <div className="school-price_comment">
                                <div className="school-price"><span>4500</span>元起</div>
                                <div className="school-comment"><span>31</span>条评论</div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </RecommendSchoolstyle>
        )
    }
}

export default connect(mapStateToProps)(withRouter(Recommendschool))
        
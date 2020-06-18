import React, { Component } from 'react'
import { P1Reviewstyle } from 'styles/p1-styled.js'
export default class P1Review extends Component {
    render() {
        return (
            <P1Reviewstyle>
                <div className="p1-title">
                    <h2>题目回顾</h2>
                </div>
                <div className="practices">
                    <div className="practice-detail">
                        <div className="img-btn img-btn1"></div>
                        <span>错题本</span>
                    </div>
                    <div className="practice-detail">
                        <div className="img-btn2 img-btn"></div>
                        <span>收藏</span>
                    </div>
                </div>

                
            </P1Reviewstyle>
        )
    }
}

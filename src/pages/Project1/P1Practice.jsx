import React, { Component } from 'react'
import { P1Practicestyle } from 'styles/p1-styled.js'
import { NavLink } from 'react-router-dom'

export default class P1Practice extends Component {
    render() {
        return (
            <P1Practicestyle>
                <div className="p1-title">
                    <h2>驾考练习</h2>
                </div>
                <div className="exam_practice">
                    <div className="mockexam">
                        <div className="exam">模拟考试</div>
                    </div>
                    
                    
                    <div className="Sequentialpractice">
                        <NavLink to='/p1/sp' className="practice">顺序练习</NavLink>
                    </div>
                    
                </div>
                <div className="practices">
                    <div className="practice-detail">
                        <div className="img-btn"></div>
                        <span>随机练习</span>
                    </div>
                    <div className="practice-detail">
                        <div className="img-btn2 img-btn"></div>
                        <span>章节练习</span>
                    </div>
                    <div className="practice-detail">
                        <div className="img-btn3 img-btn"></div>
                        <span>专项练习</span>
                    </div>
                    <div className="practice-detail">
                        <div className="img-btn4 "></div>
                        <span>考前密卷</span>
                    </div>
                </div>
                
            </P1Practicestyle>
        )
    }
}

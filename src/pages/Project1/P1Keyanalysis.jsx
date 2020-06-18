import React, { Component } from 'react'
import { P1Keyanalysistyle } from 'styles/p1-styled.js'
export default class P1Keyanalysis extends Component {
    render() {
        return (
            <P1Keyanalysistyle>
                <div className="p1-title">
                    <h2>要点及分析</h2>
                </div>
                <div className="practices">
                    <div className="practice-detail">
                        <div className="img-btn img-btn1"></div>
                        <span>练习统计</span>
                    </div>
                    <div className="practice-detail">
                        <div className="img-btn2 img-btn"></div>
                        <span>成绩分析</span>
                    </div>
                    <div className="practice-detail">
                        <div className="img-btn3 img-btn"></div>
                        <span>考试要点</span>
                    </div>
                </div>
                
            </P1Keyanalysistyle>
        )
    }
}

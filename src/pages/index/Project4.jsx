import React, { Component } from 'react'
import { Projectstyle14 } from 'styles/index-styled.js'
export default class Project4 extends Component {
    render() {
        return (
            <Projectstyle14>
                <div className="module-title">
                    <h2>科目四</h2>
                    <span>北京小车(C1/C2)安全文明<i></i></span>
                </div>
                <div className="project-detail">
                    <div className="detail1 details"><div className="detail-icon icon1"></div><div className="detail-title">顺序练习</div></div>
                    <div className="detail2 details"><div className="detail-icon icon2"></div><div className="detail-title">模拟考试</div></div>
                    <div className="detail3 details"><div className="detail-icon icon3"></div><div className="detail-title">章节练习</div></div>
                    <div className="detail4 details"><div className="detail-icon icon4"></div><div className="detail-title">考前秘卷</div></div>
                </div>
            </Projectstyle14>
        )
    }
}

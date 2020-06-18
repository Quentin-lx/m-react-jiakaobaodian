import React, { Component } from 'react'
import { Projectstyle23 } from 'styles/index-styled.js'
export default class Project2 extends Component {
    render() {
        return (
            <Projectstyle23>
                <div className="module-title">
                    <h2>科目二</h2>
                </div>
                <div className="project-detail">
                    <div className="detail1 details"><img src="http://img.58cdn.com.cn/dist/jxedt/native/video_pc_cover/v100008.jpg" alt=""/><div className="detail-title">上车准备</div></div>
                    <div className="detail2 details"><img src="http://img.58cdn.com.cn/dist/jxedt/native/video_pc_cover/v100010.jpg" alt=""/><div className="detail-title">直角拐弯</div></div>
                </div>
            </Projectstyle23>
        )
    }
}

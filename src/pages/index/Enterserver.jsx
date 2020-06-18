import React, { Component } from 'react'
import { Enterserverstyle } from 'styles/index-styled'
export default class Enterserver extends Component {
    render() {
        return (
            <Enterserverstyle>
                <div className="module-title">
                    <h2>报考服务</h2>

                </div>
                <div className="servers">
                    <div className="server-detail">
                        <div className="server-icon icon1"></div>
                        <div className="server-name">找驾校</div>
                    </div>
                    <div className="server-detail">
                        <div className="server-icon icon2"></div>
                        <div className="server-name">找教练</div>
                    </div>
                    <div className="server-detail">
                        <div className="server-icon icon3"></div>
                        <div className="server-name">找陪练</div>
                    </div>
                    <div className="server-detail">
                        <div className="server-icon icon4"></div>
                        <div className="server-name">报名须知</div>
                    </div>

                </div>
                
            </Enterserverstyle>
        )
    }
}

import React, { Component } from 'react'
import { PTCartypestyle } from 'styles/PT-styled'
export default class PTcartype extends Component {
    render() {
        return (
            <PTCartypestyle>
                <h2>驾驶证</h2>
                <div className="car-types">
                    <div className="type-detail"><i className="car"></i><span>小车</span><span>C1/C2/C3</span></div>
                    <div className="type-detail"><i className="truck"></i><span>货车</span><span>A2/B2</span></div>
                    <div className="type-detail"><i className="bus"></i><span>客车</span><span>A1/A3/B1</span></div>
                    <div className="type-detail"><i className="motor"></i><span>摩托车</span><span>D/E/F</span></div>
                </div>
            </PTCartypestyle>
        )
    }
}

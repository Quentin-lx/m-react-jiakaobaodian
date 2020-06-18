import React, { Component } from 'react'
import { PTLicensetypestyle } from 'styles/PT-styled'
export default class PTlicensetype extends Component {
    render() {
        return (
            <PTLicensetypestyle>
                <h2>资格证</h2>
                <div className="license-types">
                    <div className="type-detail"><i className="coach"></i><span>教练员</span></div>
                    <div className="type-detail"><i className="p-transport"></i><span>客运</span></div>
                    <div className="type-detail"><i className="f-transport"></i><span>货运</span></div>
                    <div className="type-detail"><i className="dangers"></i><span>危险品</span></div>
                   
                </div>
                <div className="license-types">

                    <div className="type-detail"><i className="taxi"></i><span>出租车</span></div>
                </div>
            </PTLicensetypestyle>
        )
    }
}

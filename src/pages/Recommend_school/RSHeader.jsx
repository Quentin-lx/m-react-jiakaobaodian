import React from 'react'
import { RSHeaderstyle } from 'styles/RS-styled'
export default function RSHeader() {
    return (
        <RSHeaderstyle>
            <div className="top">
                <div className="logo"><img src="http://img.58cdn.com.cn/jxedt/logos/logo3.gif" alt=""/></div>
                <div className="nowcity"></div>
                <div className="mine"></div>
            </div>
        </RSHeaderstyle>
    )
}

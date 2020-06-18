import React, { Component } from 'react'
import PTHeader from './PTHeader'
import PTposition from './PTposition'
import PTcartype from './PTcartype'
import PTlicensetype from './PTlicensetype'

export default class PT extends Component {
    render() {
        return (
            <>
            <PTHeader></PTHeader>
            <PTposition></PTposition>
            <PTcartype></PTcartype>
            <PTlicensetype></PTlicensetype>
            </>
        )
    }
}

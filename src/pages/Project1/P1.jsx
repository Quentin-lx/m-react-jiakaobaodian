import React, { Component } from 'react'
import P1Header from './P1Header'
import P1Banner from './P1Banner'
import P1Practice from './P1Practice'
import P1Review from './P1Review'
import P1Keyanalysis from './P1Keyanalysis'
export default class P1 extends Component {
    render() {
        return (
            <>
                <P1Header></P1Header>
                <P1Banner></P1Banner>
                <P1Practice></P1Practice>
                <P1Review></P1Review>
                <P1Keyanalysis></P1Keyanalysis>
            </>
        )
    }
}

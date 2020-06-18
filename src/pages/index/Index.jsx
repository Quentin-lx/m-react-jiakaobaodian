import React, { Component } from 'react'
import Header from './Header'
import Swiper from './Swiper'
import Project1 from './Project1'
import Project4 from './Project4'
import Project2 from './Project2'
import Project3 from './Project3'
import Recommendschool from './Recommend_school'
import Enterserver from './Enterserver'
import { Scrollwrap } from 'styles/index-styled.js'
export default class Index extends Component {
    render() {
        return (
           <>
           <Header></Header>
           <Scrollwrap>
                <Swiper></Swiper>
                <Project1></Project1>
                <Project4></Project4>
                <Project2></Project2>
                <Project3></Project3>
                <Recommendschool></Recommendschool>
                <Enterserver></Enterserver>
           </Scrollwrap>
           </>
        )
    }
}

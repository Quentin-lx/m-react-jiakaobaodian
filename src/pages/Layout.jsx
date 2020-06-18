import React, { Component } from 'react'
import Index from './index/Index'
import P1 from './Project1/P1'
import P1Sequentialpractice from './Project1/Sequentialpractice/P1Sequentialpractice'
import PT from './Position_Type/PT'
import PTP from './Position_Type/PT-position/PTP'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import RS from './Recommend_school/RS'
 class Layout extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    component={Index}
                    exact
                />
                <Route
                    path="/p1"
                    exact
                    component={P1}
                />
                <Route 
                    path='/p1/sp'
                    render={ (props) => {
                        return(
                            <P1Sequentialpractice {...props} />
                        )
                    }}
                />
                <Route
                    path="/pt"
                    exact
                    render={ (props) => {
                        return(
                            <PT {...props}></PT>
                        )
                    }}
                />
                <Route
                    path="/pt/position"
                    render={ (props) => {
                        return(
                            <PTP {...props}></PTP>
                        )
                    }}
                />
                <Route 
                    path="/rs"
                    
                    render={ (props) =>{
                        return(
                            <RS {...props}></RS>
                        )
                    }}
                />
                

            </Switch>
         
        )
    }
}
export default withRouter(Layout)

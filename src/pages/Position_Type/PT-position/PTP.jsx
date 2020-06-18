import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GETCITY,GETNOWCITY } from '../../action-types'
import { PTPstyle } from 'styles/PTP-styled' 
import { GETNOWPYCITY } from '../../action-types'

const mapStateToProps = state =>{
    
    return({
        nowcity:state.getIn(['mainreducers','nowcity']),
        hotcities:state.getIn(['mainreducers','cityList']).hotCities,
        allcities:state.getIn(['mainreducers','cityList']).allCities
    })
}
const mapDispatchToProps = dispatch =>({
    loadcity() {
        dispatch({
            type: GETCITY,
        })
    },
    getnowcity(){
        dispatch({
            // localStorage.getItem('nowcity') !== null ? 
            type: GETNOWCITY,
            data: localStorage.getItem('nowcity') 
            && JSON.parse(localStorage.getItem('nowcity')).name
        })
    },
    getnowpycity(){
        dispatch({
            type:GETNOWPYCITY,
            data:localStorage.getItem('nowcity')
            &&JSON.parse(localStorage.getItem('nowcity')).pyname
        })
    }
    

})

class PTP extends Component {
    choicecity(pyname,name){
 
        console.log(pyname,name)
        // console.log(localStorage.getItem('nowcity'))
        if(name === "北京"){
            pyname ='bj'
        }
        localStorage.setItem('nowcity',JSON.stringify({
            pyname,
            name
        }))
        this.props.history.push({
            pathname:'/'
        })
        this.props.getnowcity()
        this.props.getnowpycity()
    }
    componentDidMount(){
       this.props.loadcity()
       
    }
    render() {
        // console.log(this.props.nowcity)
        
        return (
            <PTPstyle>
                <div className="top">
                    <div className="logo"><img src="http://img.58cdn.com.cn/jxedt/logos/logo3.gif" alt=""/></div>
                    <div className="nowcity"></div>
                    <div className="mine"></div>
                </div>
                <div className="cities-wrap">
                    <div className="nowcity">
                        <h2>当前城市</h2>
                        <div className="city-name">
                        <div className="success">{this.props.nowcity}</div>
                        </div>
                    </div>
                    <div className="hot-cities">
                        <h2>热门城市</h2>
                        <div className="cities-name">
                            {   
                                this.props.hotcities !== undefined
                                &&
                                this.props.hotcities.map((value) => {
                                    // console.log(value)
                                    return(
                                    <li 
                                    key={value.cityOID}
                                    onClick={this.choicecity.bind(this,value.spelling,value.cityName)}
                                    >{value.cityName}</li>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {
                        this.props.allcities !== undefined
                        &&
                        this.props.allcities.map((value,index) => {
                            return (
                                <div className="all-cities" key={index+value}>
                                    <h2>{value.title}</h2>
                                    <div className="cities-name">
                                        {
                                            value.cities.map((values) =>{
                                                return(
                                                    <li 
                                                    key={values.cityOID}
                                                    onClick={this.choicecity.bind(this,values.spelling,values.cityName)}
                                                    >{values.cityName}</li>
                                                )
                                            })
                                        }
                                    </div>
                                    
                                </div>
                            )
                            
                        })
                    }
                </div>
                    
                
                
            </PTPstyle>
        )
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(PTP) 
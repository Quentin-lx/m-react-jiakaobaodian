import React,{ useState , useEffect , useCallback} from 'react'

import { connect } from 'react-redux'
import { RSMainstyle } from 'styles/RS-styled'
import { GETSCHOOL } from '../action-types'
import BScroll from 'better-scroll'
import _ from 'lodash'
const mapStateToProps = state =>{
    return({
        pyname:state.getIn(['mainreducers','nowcitypyname']),
        rclist:state.getIn(['mainreducers','schoolList'])
    })
}
const mapDispatchToProps = dispatch =>({
    loadschool(pyname,pagenum){
        dispatch({
            type:GETSCHOOL,
            data:{
                pyname,
                pagenum
            }
        })
    }
})






function RSMain(props) {
    
    let { loadschool,pyname }  = props
    const [pagenum,setpage] = useState(1)
    const [rclist,setrclist] = useState([])
    
    const thirdCompInit = useCallback(() => {
        let scroll = new BScroll('.school-wrap',{
            scrollY:true,
            click: true,
            probeType:2,
            pullUpLoad:true,
            
        })
        console.log(1)
        scroll.on('pullingUp', _.throttle( () =>{
            setTimeout(() =>{
                setpage((pagenum) =>{
                    return pagenum + 1
                })
            },0)
            setTimeout(()=>{
                
                    scroll.refresh()
                    scroll.finishPullUp()
            },0)  
        },2000))
        
    },[])
    useEffect(() => {
        thirdCompInit()
    }, [thirdCompInit])
    
    useEffect( () => {
        
       loadschool(pyname,pagenum)
        
        
        console.log(666)
   
    },[loadschool,pyname,pagenum])
    
    useEffect(() => {
        setrclist((rclist) =>{
            return [...rclist,...props.rclist]
        })
       console.log(555)
    }, [props.rclist])
    
    
    
    return (
        <RSMainstyle>
            {
                console.log(rclist.length)
                
                
            }
            <div className="school-wrap">
                <div className="schools">
            {
                rclist.length 
                &&
                rclist.map((value) =>{
                    return (
                        <div className="school-detail" key={value.url}>
                                <div className="school-img"><img src={value.imgUrl} alt=""/></div>
                                <div className="school-text">
                                    <div className="line1">
                                        <div className="school-name">{value.title}</div>
                                        <i></i>
                                    </div>
                                    <div className="line2">
                                        <div className={`star-${value.xingJi} school-star`}>{}</div>
                                        <div className="school-price"><span>{value.price}</span>元起</div>
                                    </div>
                                    <div className="line3">
                                    <div className="fans-num">关注:  {value.click}人关注</div>
                                    </div>
                                </div>
                        </div>
                    )
                })
            }
            </div>
           </div>
        </RSMainstyle>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(RSMain)

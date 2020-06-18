import { LOADCITY,GETNOWCITY,GETNOWPYCITY,LOADSCHOOL } from './action-types'
import { Map } from 'immutable'


const defaultState = Map({
    cityList:[],
    
    nowcity:localStorage.getItem('nowcity') ? JSON.parse(localStorage.getItem('nowcity')).name : '北京',
    nowcitypyname:localStorage.getItem('nowcity') ? JSON.parse(localStorage.getItem('nowcity')).pyname : 'bj',

    schoolList:[]
})

export default (state=defaultState,action) => {
    console.log(state)//时间旅行应该就靠这个把？

    switch(action.type){
        case LOADCITY :
            // console.log(action)
            return state.set('cityList',action.data)
        case GETNOWCITY :
            // console.log(state.get('nowcity'));
            return state.set('nowcity',action.data)
        case GETNOWPYCITY :
            return state.set('nowcitypyname',action.data)
        case LOADSCHOOL :
            
            return state.set('schoolList',action.data)
        default:
            return state
    }
}
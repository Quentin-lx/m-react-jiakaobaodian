import { put } from 'redux-saga/effects'
import * as types from './action-types'
import { get } from 'utils/http.js'

function* loadcity(){
    try {
        const result = yield get({
            url:'/city/showapi/cities'
        })
        yield put({ type:types.LOADCITY,data:result.data.result})
    } catch (e) {
        
    }

}
function* loadschool(action){
    // console.log(action.data)
    try {
        const result = yield get({
            url:`/api/jiaxiao/${action.data.pyname}/pn${action.data.pagenum}/`
        })
        yield put({type:types.LOADSCHOOL,data:result.data})
    } catch (e) {
        
    }
} 





export{
    types,
    loadcity,
    loadschool
}
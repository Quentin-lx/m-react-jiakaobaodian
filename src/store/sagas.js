import { takeEvery } from 'redux-saga/effects'
import  * as mainsagas  from '../pages/sagas'

let { GETCITY,GETSCHOOL} = mainsagas.types 

function* sagas(){
    yield takeEvery(GETCITY,mainsagas.loadcity)
    yield takeEvery(GETSCHOOL,mainsagas.loadschool)
}


export default sagas
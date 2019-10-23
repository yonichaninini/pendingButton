import {takeLatest,put,delay} from 'redux-saga/effects';
import {SEND_INITIAL, SEND_REQUEST, SEND_SUCCESS, SEND_FAILURE} from '../reducers/fetchingData';

function* sendSaga(){
try{
  yield delay(3000);
  yield put({
    type : SEND_SUCCESS,
  });
  yield delay(2000);
  yield put({
    type : SEND_INITIAL,
  });
}catch(e){
  yield delay(3000);
  yield put({
    type : SEND_FAILURE,
    error : e,
    });
}
}
export default function* watchSend(){
  yield takeLatest(SEND_REQUEST,sendSaga);
}
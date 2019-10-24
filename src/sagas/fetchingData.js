import {takeLatest,put,delay,call} from 'redux-saga/effects';
import axios from "axios";
import {SEND_INITIAL, SEND_REQUEST, SEND_SUCCESS, SEND_FAILURE} from '../reducers/fetchingData';

function postApicall(apiURL,method){
  return axios({url : apiURL, method : method});
}
function* sendSaga(action){
try{
  const res = yield call(postApicall,action.payload.apiURL,action.payload.method);
  yield put({
    type : SEND_SUCCESS,
    data : res.data,
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
  yield takeLatest(SEND_REQUEST, sendSaga);
}
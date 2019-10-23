import React from 'react';
import './App.css';
import Pending from './Component/pendingButton/Pending';

import { useSelector, useDispatch } from 'react-redux';
import { send_request } from './reducers/fetchingData';

function App() {
  let isLoading = useSelector(state => state.isLoading, []);
  let isSuccess = useSelector(state => state.isSuccess, []);

  const dispatch = useDispatch();

  const onFetchingHandle = () => {
    dispatch(send_request());
  }
  const onFailureHandle = () => {

  }
  const onSuccessHandle = () => {

  }
  const onProcess  = () => {
    let i = 0;
    const frame = () => {
      if(i >= 100) {
        clearInterval(progress);
      }
      else {
        i++;
        console.log(i);
        return i
      }
    }
    let progress = setInterval(frame,30);
  }
  return (
    <div className = "App">
      <Pending
      successText = "전송성공" 
      failureText = "전송실패"
      isLoading = {isLoading}
      isSuccess = {isSuccess}
      onFetchingHandle = {onFetchingHandle}
      onFailureHandle = {onFailureHandle}
      onSuccessHandle = {onSuccessHandle}
      onProcess = {onProcess}
      >SEND</Pending>
    </div>
  );
}

export default App;

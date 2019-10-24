import React from 'react';
import './App.css';
import Pending from './Component/pendingButton/Pending';


function App() {

  const onFetchingHandle = () => {

  }
  const onFailureHandle = () => {

  }
  const onSuccessHandle = (data) => {
    let post = data;
  }
  const onProcess  = () => {
  }
  return (
    <div className = "App">
      <Pending
      successText = "전송성공" 
      failureText = "전송실패"
      apiURL = "https://jsonplaceholder.typicode.com/photos/1"
      method = "get"
      onFetchingHandle = {onFetchingHandle}
      onFailureHandle = {onFailureHandle}
      onSuccessHandle = {onSuccessHandle}
      onProcess = {onProcess}
      >SEND</Pending>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Pending from './Component/pendingButton/Pending';


function App() {

  const onFetchingHandle = () => {

  }
  const onFailureHandle = () => {

  }
  const onSuccessHandle = () => {

  }
  const onProcess  = () => {
    /*let i = 0;
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
    let progress = setInterval(frame,30);*/
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

import React,{useEffect,useState} from 'react';
import './Loading.scss';

const Loading = (props) => {
  const [percent,setPercent] = useState(0);
  console.log("render");
  const size = 30;
  const strokeWidth = 5;
  const radius = (size-strokeWidth)/2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - dashArray * percent / 100;
  useEffect(() => {
    onProcess()
  }, []);
  const onProcess  = () => {
    let i = 0;
    const frame = () => {
      if(i >= 100) {
        clearInterval(progress);
      }
      else {
        i++;
        setPercent(i);
      }
    }
    let progress = setInterval(frame,30);
  }
  return (
    <div className = "Loading-component-wrapper">
      <svg
      width={size}
      height={size}>
    <circle
      className = "circle-background"
      cx = {size/2}
      cy = {size/2}
      r = {radius}
      strokeWidth = {strokeWidth}
    />
    <circle
      className = "circle-progress"
      cx = {size/2}
      cy = {size/2}
      r = {radius}
      strokeWidth = {strokeWidth}
      transform={`rotate(-90 ${size / 2} ${size / 2})`}
      style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset
            }}
    />
    </svg>
    <div className = "text">Loading</div>
    </div>
    
  );
};
export default Loading;
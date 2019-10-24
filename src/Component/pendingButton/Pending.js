import React  from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { send_request } from '../../reducers/fetchingData';

import Loading from '../loadingBar/Loading';

import PropTypes from 'prop-types';

const PendingButton = styled.button `
  width : 150px;
  height : 60px;
  border : 0;
  border-radius : 5px;
  background: ${props => props.isLoading ? '#dc315b' : '#FF3366'};
  color: aliceblue;
  font-size: 15px;
  &:hover{
    background: #dc315b;
    transition: 0.4s;
  }
`

const Pending = (props) => {
  let isLoading = useSelector(state => state.isLoading, []);
  let isSuccess = useSelector(state => state.isSuccess, []);
  let post = useSelector(state => state.post,[]);
  const dispatch = useDispatch();
  const onFatching = () =>{
    dispatch(send_request(props.apiURL,props.method));

  }
  return (
    <div>
      <div>
        {post.title}
      </div>
      <PendingButton isLoading = {isLoading} onClick = {onFatching} disabled = {isLoading} >
        {isLoading ? <Loading sqSize = "15px" percent = {props.onProcess} onProcess = {props.onProcess}>Loading</Loading> 
                  : isSuccess ? props.successText
                  : isSuccess === null ? props.children : props.failureText}
      </PendingButton>
    </div>
  );
};

Pending.propTypes = {
  successText : PropTypes.string,
  failureText : PropTypes.string,
  onFetchingHandle : PropTypes.func.isRequired,
};
Pending.defaultProps = {
  children : 'SEND',
  successText : '전송완료',
  failureText : '전송실패',
}

export default Pending;
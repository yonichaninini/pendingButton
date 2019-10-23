import React  from 'react';
import styled from 'styled-components';

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
  return (
    <div>
      <PendingButton isLoading = {props.isLoading} onClick = {props.onFetchingHandle} disabled = {props.isLoading} >
        {props.isLoading ? <Loading sqSize = "15px" percent = {props.onProcess} onProcess = {props.onProcess}>Loading</Loading> 
                  : props.isSuccess ? props.successText
                  : props.isSuccess === null ? props.children : props.failureText}
      </PendingButton>
    </div>
  );
};

Pending.propTypes = {
  successText : PropTypes.string,
  failureText : PropTypes.string,
  onFetchingHandle : PropTypes.func.isRequired,
  isLoading : PropTypes.bool.isRequired,
};
Pending.defaultProps = {
  children : 'SEND',
  successText : '전송완료',
  failureText : '전송실패',
}

export default Pending;
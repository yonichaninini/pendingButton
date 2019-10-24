export const initialState = {
  isLoading : false,
  isSuccess : null,
  post : [],
}
export const SEND_REQUEST = 'SEND_REQUEST';
export const SEND_SUCCESS = 'SEND_SUCCESS';
export const SEND_FAILURE = 'SEND_FAILURE';
export const SEND_INITIAL = 'SEND_INITIAL';

export const send_request = (apiURL,method) => ({type: SEND_REQUEST, payload : {apiURL,method}});
export const send_success = (post) => ({ type: SEND_SUCCESS, data : post});
export const send_failure = () => ({ type: SEND_FAILURE });
export const send_initial = () => ({ type: SEND_INITIAL });

function fetchingData(state = initialState, action){
  switch(action.type) {
    case SEND_REQUEST : {
      return{
        ...state,
        isLoading : true,
        isSuccess : null,
      }
    }
    case SEND_SUCCESS : {
      return{
        ...state, 
        isLoading : false,
        isSuccess : true,
        post : action.data,
      }
    }
    case SEND_FAILURE : {
      return{
        ...state,
        isLoading : false,
        isSuccess : false,
      }
    }
    case SEND_INITIAL : {
      return{
        ...state,
        isLoading : false,
        isSuccess : null,
      }
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

export default fetchingData;
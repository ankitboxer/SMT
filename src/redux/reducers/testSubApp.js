import {
    GET_SUB_APP_REQUEST,
    GET_SUB_APP_SUCCESS,
    GET_SUB_APP_FAILED,
    GET_15_MINUTE_READING_REQUEST,
    GET_15_MINUTE_READING_SUCCESS,
    GET_15_MINUTE_READING_FAILED
  } from '../actions/action_types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_SUB_APP_REQUEST:
      return { ...state };
    case GET_SUB_APP_SUCCESS:
        console.log('reducer called',action.subApp);
      return { ...state, subApp: action.subApp };
    case GET_SUB_APP_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
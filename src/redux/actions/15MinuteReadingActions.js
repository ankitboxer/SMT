import {
  GET_SUB_APP_REQUEST,
  GET_15_MINUTE_READING_REQUEST,
  GET_15_MINUTE_READING_SUCCESS,
  GET_15_MINUTE_READING_FAILED
} from './action_types';
  
export const get15MinuteReading = (payload) => {
  return {
    type: GET_15_MINUTE_READING_REQUEST,
    payload
  };
}

export const getSubApp = (payload) => {
  console.log('action called');
  return {
    type: GET_SUB_APP_REQUEST,
    payload
  }
}
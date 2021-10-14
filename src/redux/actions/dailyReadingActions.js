import {
    GET_DAILY_READING_REQUEST,
    GET_DAILY_READING_SUCCESS,
    GET_DAILY_READING_FAILED
  } from './action_types';
  
  export const getDailyReading = (payload) => {
    return {
      type: GET_DAILY_READING_REQUEST,
      payload
    };
  };
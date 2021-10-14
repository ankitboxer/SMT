import {
    GET_MONTHLY_BILLING_INFORMATION_REQUEST,
    GET_MONTHLY_BILLING_INFORMATION_SUCCESS,
    GET_MONTHLY_BILLING_INFORMATION_FAILED
  } from './action_types';
  
  export const getMonthlyReading = (payload) => {
    return {
      type: GET_MONTHLY_BILLING_INFORMATION_REQUEST,
      payload
    };
  };
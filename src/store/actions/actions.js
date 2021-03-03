import { ON_ERROR, ON_LOADING } from "../actionTypes";
import { GET_SUCCESS } from './../actionTypes';
import db from './../../api';


const loadingRequest = () => ({type: ON_LOADING});
const errorRequest = error => ({type: ON_ERROR, error});
const getSuccess = items => ({type: GET_SUCCESS, items});

export const retrieveData = () => {
  return async dispatch => {
    dispatch(loadingRequest());
    try {
      const response = await db.get('.json');
      dispatch(getSuccess(response.data));
    } catch (error) {
      dispatch(errorRequest(error))
    }
  }
};
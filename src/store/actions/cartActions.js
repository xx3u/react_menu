import { CART_FAILURE, CART_LOADING,CART_SUCCESS } from "../actionTypes";
import db from './../../api';

const cartRequest = () => ({type: CART_LOADING});
const cartSuccess = items => ({type: CART_SUCCESS, items});
const cartFailure = error => ({type: CART_FAILURE, error});

export const getCartItem = () => {
  return async dispatch => {
    try {
      dispatch(cartRequest());
      const response = await db.get('.json');
      dispatch(cartSuccess(response.data))
    } catch (error) {
      dispatch(cartFailure(error));      
    }
  }
};
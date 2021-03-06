import { CART_FAILURE, CART_LOADING, CART_SUCCESS, POST_DETAILS, REMOVE_FROM_CART} from "../actionTypes";
import db from './../../api';
import { ADD_TO_CART, NO_ORDERS } from './../actionTypes';

const cartRequest = () => ({type: CART_LOADING});
const cartSuccess = items => ({type: CART_SUCCESS, items});
const cartFailure = error => ({type: CART_FAILURE, error});

export const getCartItem = () => {
  return async dispatch => {
    try {
      dispatch(cartRequest());
      const response = await db.get('dishes.json');
      dispatch(cartSuccess(response.data))
    } catch (error) {
      dispatch(cartFailure(error));      
    }
  }
};

export const addToCart = (item, price) => {
  return {type: ADD_TO_CART, item, price}
};

export const removeFromCart = (price, quantity, name) => {
  return {type: REMOVE_FROM_CART, price, quantity, name}
}

export const checkNoOrders = () => ({type: NO_ORDERS});

export const postOrder = (details, cartItems) => {
  return async dispatch => {
    dispatch(cartRequest());
    try {
      let data = {orderDetails: details, orderedItem: cartItems};
      await db.post('createdOrders.json', data);
      dispatch({type: POST_DETAILS, details});
    } catch (error) {
      dispatch(cartFailure(error));
    }
  }
};
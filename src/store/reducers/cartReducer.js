import { CART_FAILURE, CART_LOADING, CART_SUCCESS, REMOVE_FROM_CART } from "../actionTypes";
import { ADD_TO_CART } from './../actionTypes';

const initialState = {
  cartItems: {
  },
  delivery: 500,
  totalPrice: 500,
  loading: false,
  error: null,
  order: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_LOADING:
      return {...state, loading: true};
    case CART_FAILURE:
      return {...state, error: action.error};
    case CART_SUCCESS:
      const items = {};
      Object.values(action.items).map(item => {
        items[item.name] = 0;
        return item;
      })
      return {...state, cartItems: items, loading: false};
    case ADD_TO_CART:
      return {
        ...state, 
        cartItems: {
          ...state.cartItems,
          [action.item]: state.cartItems[action.item] + 1
        },
        order: true,
        totalPrice: state.totalPrice + action.price
      };
    case REMOVE_FROM_CART:
      return {
        ...state, 
        cartItems: {
          ...state.cartItems,
          [action.name]: 0
        },
        totalPrice: state.totalPrice - action.price * action.quantity
      }
    default:
    return state;
  }
}

export default cartReducer;

import { CART_FAILURE, CART_LOADING, CART_SUCCESS } from "../actionTypes";

const initialState = {
  cartItems: {
  },
  delivery: 500,
  totalPrice: 500,
  loading: false,
  error: null,
  order: false
}

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
    default:
    return state;
  }
}

export default cartReducer;
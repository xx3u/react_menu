import { CART_FAILURE, CART_LOADING, CART_SUCCESS, ADD_TO_CART, REMOVE_FROM_CART, NO_ORDERS, POST_DETAILS } from "../actionTypes";

const initialState = {
  cartItems: {
  },
  delivery: 500,
  totalPrice: 500,
  loading: false,
  error: null,
  order: false,
  orderDetails: {}
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
        totalPrice: state.totalPrice + parseFloat(action.price)
      };
    case REMOVE_FROM_CART:
      return {
        ...state, 
        cartItems: {
          ...state.cartItems,
          [action.name]: 0
        },
        totalPrice: state.totalPrice - action.price * action.quantity
      };
    case NO_ORDERS:
      const values = {...state.cartItems};
      let sum = Object.keys(values).reduce((sum, key) => sum + parseFloat(values[key] || 0), 0);
      if (sum === 0) {
        return {...state, order: false}
      } else {
        return {...state, order: true}
      }
    case POST_DETAILS:
      return {...state, orderDetails: action.details};
    default: return state;
  }
}

export default cartReducer;

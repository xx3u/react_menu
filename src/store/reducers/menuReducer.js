import { ON_ERROR, ON_LOADING, GET_SUCCESS } from '../actionTypes';

const initialState = {
  dishes: [],
  loading: false,
  error: null
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOADING:
      return {...state, loading: true};
    case GET_SUCCESS:
      const dishesCopy = [...state.dishes];
      Object.keys(action.items).map(id => {
        const item = action.items[id];
        item.id = id;
        dishesCopy.push(item);
        return id;
      })
      return {...state, dishes: dishesCopy, loading: false};
    case ON_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default menuReducer;
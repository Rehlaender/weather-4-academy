export const ADD_TOWN_REQUESTED = 'weather/ADD_TOWN_REQUESTED';
export const ADD_TOWN = 'weather/ADD_TOWN';
export const DELETE_TOWN_REQUESTED = 'weather/DELETE_TOWN_REQUESTED';
export const DELETE_TOWN = 'weather/DELETE_TOWN';

export const SAY_HI = 'weather/SAY_HI';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  isSearching: false,
  savedCities: [],
  posts: [
    {
      title: 'lel'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAY_HI:
      return {
        ...state
      };
    case 'FETCH_REQUEST':
      return state;
    case 'FETCH_SUCCESS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export const sayHi = () => {
  console.log('aiudaaaa');

  return dispatch => {
    dispatch({
      type: SAY_HI
    });
  };
};

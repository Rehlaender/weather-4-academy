export const changeBeeMood = bee => dispatch => {
  dispatch({
    type: 'CHANGE_BEE_MOOD',
    payload: {
      bee
    }
  });
};

export const addNewBee = lastId => dispatch => {
  dispatch({
    type: 'ADD_NEW_BEE',
    payload: {
      lastId
    }
  });
};

export const changeBeePosition = position => dispatch => {
  dispatch({
    type: 'CHANGE_BEE_POSITION',
    payload: {
      position
    }
  });
};

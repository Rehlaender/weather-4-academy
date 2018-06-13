const initialState = {
  bees: [
    {
      id: 0,
      happy: true,
      speed: 10,
      x: 0,
      color: 'red',
      y: 0,
      timer: 0
    },
    {
      id: 1,
      happy: false,
      speed: 10,
      x: 10,
      color: 'green',
      y: 10,
      timer: 0
    }
  ]
};

const defaultBee = {
  id: 0,
  happy: true,
  speed: 10,
  x: 0,
  color: 'red',
  y: 0,
  timer: 0
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'ADD_NEW_BEE':
      const lastId = action.payload.lastId;
      const newBee = { ...defaultEmptyTextBox, id: lastId };
      return {
        ...state,
        bees: [...state.bees, newBee]
      };
      break;
    case 'CHANGE_BEE_MOOD':
      const [beeWithNewMood] = state.bees.filter(
        bee => action.payload.bee.id != bee.id
      );

      return {
        result: action.payload
      };
    default:
      return state;
  }
};

const CalculateState = {
  value: 0,
};

const INCREMENT = 'INCREMENT';

export const calculateReducer = (state = CalculateState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };

    default:
      return state;
  }
};

export const incrementAction = (payload) => ({ type: INCREMENT, payload });

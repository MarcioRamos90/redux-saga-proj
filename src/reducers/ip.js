const INITIAL_STATE = {
  data: [],
  isFatching: false,
  error: false
};

const ip = (state = INITIAL_STATE, action) => {
  if (action.type === "LOAD_DATA_REQUEST") {
    return {
      data: [],
      isFatching: true,
      error: false
    };
  }
  return state;
};

export default ip;

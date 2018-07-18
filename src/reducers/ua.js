const INITIAL_STATE = {
  data: [],
  isFatching: false,
  error: false
};

const ua = (state = INITIAL_STATE, action) => {
  if (action.type === "LOAD_UA_REQUEST") {
    return {
      data: [],
      isFatching: true,
      error: false
    };
  }
  return state;
};

export default ua;

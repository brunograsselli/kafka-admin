import * as actions from "../actions/topics";

const initialState = {
  byName: {}
};

const topics = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECEIVE_TOPIC_DETAILS: {
      return {
        ...state,
        byName: {
          ...state.byName,
          [action.name]: {
            ...state.byName[action.name],
            ...action.details
          }
        }
      };
    }
    case actions.RECEIVE_TOPICS: {
      return {
        ...state,
        byName: action.byName
      };
    }
    default:
      return state;
  }
};

export default topics;

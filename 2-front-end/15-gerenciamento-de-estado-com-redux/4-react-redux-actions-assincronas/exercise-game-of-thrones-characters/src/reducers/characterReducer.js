import { SEARCH_CHARACTER, ON_SUCESS, ON_ERROR } from "../actions";

const INITIAL_STATE = {
  loading: false,
  character: '',
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_CHARACTER:
      return { ...state, loading: true };
    case ON_SUCESS:
      return { ...state, loading: false, character: action.character, error: null };
    case ON_ERROR:
      console.log(action.error);
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

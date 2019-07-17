import {
  GET_CHARACTERS,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILURE
} from '../actions';
/* we need our action types here*/

const initialState = {
  characters: [],
  errorMessage: null,
  fetching: false
  // Array characters, Boolean fetching, null error.
};

// Fill me in with the important reducers
// action types should be FETCHING, SUCCESS and FAILURE
// your switch statement should handle all of these cases.
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, fetching: true };
    case GET_CHARACTERS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false
      };
    case GET_CHARACTERS_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};

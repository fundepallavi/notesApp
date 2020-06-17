import { ADD_NOTES, REMOVE_NOTES, UPDATE_NOTES } from "../actions/index.jsx";

const initialState = [];

export default function Notes(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTES:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.content
        }
      ];
    case REMOVE_NOTES:
      return state.filter(({ id }) => id !== action.id);
    case UPDATE_NOTES:
      return state.map(
        notes => (notes.id === action.id ? { ...notes, ...action } : notes)
      );
    default:
      return state;
  }
}
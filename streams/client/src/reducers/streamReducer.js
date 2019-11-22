import { EDIT_STREAM, FETCH_STREAM, DELETE_STREAM, CREATE_STREAM } from '../actions/types';
export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state
  }
}
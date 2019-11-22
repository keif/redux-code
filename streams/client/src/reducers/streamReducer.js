import { EDIT_STREAM, FETCH_STREAM, DELETE_STREAM, CREATE_STREAM } from '../actions/types';
import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_STREAM:
        return _.omit(action.payload, state)
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
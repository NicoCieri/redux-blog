import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_POSTS:
      console.log(FETCH_POSTS, action.payload);
      return _.mapKeys(action.payload, 'id');
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

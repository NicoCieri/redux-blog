import axios from 'axios';

export const FETCH_POST = 'fetch_post';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=nicocieri1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_POSTS, payload: data })
    })
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: CREATE_POST, payload: data })
      if (callback) callback();
    })
  }

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_POST, payload: data })
    })
  }

}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return (dispatch) => {
    request.then(() => {
      console.log('id', id)
      dispatch({ type: DELETE_POST, payload: id });
      if (callback) callback();
    })
  }


}

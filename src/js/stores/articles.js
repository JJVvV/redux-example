import assign from 'object-assign'
//import * as types from '../constants/articles.js';

const initialState = [];

export default function articles(state = initialState, action={}){
  return action.articles || [];
}

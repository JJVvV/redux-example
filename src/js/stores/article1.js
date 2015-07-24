import assign from 'object-assign'
import * as constant from '../constants/articles.js';

const initialState = {
  user:{},
  article:{},
  articles:[],
  loading: false
};

const actionsMap = {
  [constant.LOAD_ARTICLE]: (state, action) => ({article: action.article}),
  [constant.LOAD_ARTICLES]: (state, action) => ({articles: action.articles}),
  [constant.USER]: (state, action) => {
    let user = action.user || {};

    user.isLogin = user && !!user.username;
    return {user}
  }
}

export default function article(state = initialState, action){
  const reduceFn  = actionsMap[action.type];
  if(!reduceFn) return state;

  return Object.assign({}, state, reduceFn(state, action), {loading: false});
}

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
  //[constant.SAVE_ARTICLE]: (state, action) => ({article: action.article}),
  [constant.LOAD_ARTICLES]: (state, action) => ({articles: action.articles}),
  [constant.USER]: (state, action) => {
    let user = action.user || {};

    if(user.jwt){
      user.isLogin = true;
      localStorage.setItem('jwt', user.jwt);
    }

    return {user}
  },
  [constant.LOGOUT]: (state, action) => {
    return {user:action.user};

  }
}

export default function article(state = initialState, action){
  const reduceFn  = actionsMap[action.type];
  if(!reduceFn) return state;

  return Object.assign({}, state, reduceFn(state, action), {loading: false});
}

/**
 * Created by Administrator on 2015/7/10.
 */

import {Promise} from 'es6-promise';
import * as constant from '../constants/articles.js';
import reqwest from 'reqwest';
import RouterContainer from '../services/routerContainer.js';
import ReduxContainer from '../services/reduxContainer.js';
const MAIN_URL = '';

//article
export function loadArticle(id){

  return dispatch => {
    if(id === 'new'){
      return dispatch({
        type: constant.LOAD_ARTICLE,
        article: {}
      });
    }
    reqwest(`${MAIN_URL}/api/article/${id}`)
      //.then(res => JSON.parse)
      .then(res => {
        if(res.result){
          dispatch({
            type: constant.LOAD_ARTICLE,
            article: res.article
          })
        }

      })
  }
}

//saveArticle
export function saveArticle(article){
  return dispatch => {
    reqwest({
      url: `${MAIN_URL}/admin/article/${article.id}`,
      method: 'POST',
      type: 'json',
      dataType:'json',
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      data:article
    })
      //.then(res => JSON.parse)
      .then(res =>{
        if(res.result){
          dispatch({
            type: constant.LOAD_ARTICLES,
            articles: res.articles
          })
          RouterContainer.get().transitionTo('index');
        }
      })

  }
}
//articles
export function loadArticles(){

  return dispatch => {
    //cache

    let articles = ReduxContainer.state().articles;
    if(articles.length){
      debugger;
      dispatch({
        type: constant.LOAD_ARTICLES,
        articles: articles
      });
      return;
    }

    Promise.resolve( reqwest(`${MAIN_URL}/api/articles`))
      //.then(res => JSON.parse)
      .then(res => dispatch({
        type: constant.LOAD_ARTICLES,
        articles: res.articles
      }))

      .catch(err => {
        console.log('load failed');

      });
  }
}

// user login
export function login(username, password){

  return dispatch => {

    Promise.resolve( reqwest({
      url: `${MAIN_URL}/admin/login`,
      method:'POST',

      type: 'json',

      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      data:{
        username,
        password
      }
    }))

      //.then(res => JSON.parse)
      .then(res => {

        if(res.result){
          dispatch({
            type: constant.USER,
            user: {
              username:'alex',
              jwt: res.id_token
            }
          });
          RouterContainer.get().transitionTo('index');
        }

        //dispatch({
        //  type: constant.USER,
        //  user: {
        //    username: 'alex'
        //  }
        //})
        //RouterContainer.get().transitionTo('index');

      })

      .catch(err => {

        const res = {
          result: true,
          user:{
            username: 'alex',
            jwt: 'alexjwt'
          }
        }
        dispatch({
          type: constant.USER,
          user: res
        });
      });
  }
}

//user logout
export function logout(){
  localStorage.clear('jwt');
  return dispatch => {
    dispatch({
      type: constant.LOGOUT,
      user: {
        jwt: ''
      }
    });
    RouterContainer.get().transitionTo('index');
  }
}



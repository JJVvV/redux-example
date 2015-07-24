/**
 * Created by Administrator on 2015/7/10.
 */

import {Promise} from 'es6-promise';
import reqwest from 'reqwest';
import * as constant from '../constants/articles.js';

const MAIN_URL = 'asdkasdlfkj';

export function loadArticles(){

  return dispatch => {
    Promise.resolve( reqwest(`${MAIN_URL}/articles`))

    .then(res => JSON.parse)
    .then(res => dispatch({
        type: constant.LOAD_ARTICLES,
        articles: res
      }))

    .catch(err => {

        const articles = [
          {
            id:1,
            title:'我的文章',
            img: '/src/img/2.jpg'
          },
          {
            id:2,
            title:'我的文章2',
            img: '/src/img/2.jpg'
          }
        ];
        dispatch({
          type: constant.LOAD_ARTICLES,
          articles: articles
        });
      });
  }
}


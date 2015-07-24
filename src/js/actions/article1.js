/**
 * Created by Administrator on 2015/7/10.
 */

import {Promise} from 'es6-promise';
import * as constant from '../constants/articles.js';
import reqwest from 'reqwest';
const MAIN_URL = 'asdfasdlasldkfj';

//article
export function loadArticle(id){

  return dispatch => {

    setTimeout(() => {
      reqwest(`${MAIN_URL}/detail/${id}`)
        //.then(res => JSON.parse)
        //.then(res => dispatch({
        //    type: constant.LOAD_ARTICLE,
        //    articles: res
        //  }))
        .always(err => {
          const articles = [
            {
              title:'我的文章',
              author: 'Alex Liu',
              timer: '2015-07-06',
              content: ` Pocket’s design moves deftly between phone and tablet. Lists with full-bleed imagery on phone transform into a neatly organized grid on larger tablets, with cards spanning multiple columns as needed. The tablet cards add additional information, while still maintaining a strong connection to their phone siblings.
                      The app’s navigation is similarly adaptive. The navigation drawer’s contents are organized hierarchically`
            },
            {
              title:'我的文章222',
              author: 'Alex Liu',
              timer: '2015-07-06',
              content: `Good Day Pocket’s design moves deftly between phone and tablet. Lists with full-bleed imagery on phone transform into a neatly organized grid on larger tablets, with cards spanning multiple columns as needed. The tablet cards add additional information, while still maintaining a strong connection to their phone siblings.
                      The app’s navigation is similarly adaptive. The navigation drawer’s contents are organized hierarchically`
            },
            {
              title:'我的文章333',
              author: 'Alex Liu',
              timer: '2015-07-06',
              content: ` Hello World Pocket’s design moves deftly between phone and tablet. Lists with full-bleed imagery on phone transform into a neatly organized grid on larger tablets, with cards spanning multiple columns as needed. The tablet cards add additional information, while still maintaining a strong connection to their phone siblings.
                      The app’s navigation is similarly adaptive. The navigation drawer’s contents are organized hierarchically`
            }
          ];

          dispatch({
            type: constant.LOAD_ARTICLE,
            article: articles[id]
          });
        });
    }, 500);
  }
}

//articles
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
            img: '/src/img/2.jpg',
            detail:'情爱，乃至性爱，是人的基本境遇之一，自然也该成为文学所关涉的重要对象。'
          },
          {
            id:2,
            title:'我的文章2',
            img: '/src/img/2.jpg',
            detail:'情爱，乃至性爱，是人的基本境遇之一，自然也该成为文学所关涉的重要对象。'

          }
        ];
        dispatch({
          type: constant.LOAD_ARTICLES,
          articles: articles
        });
      });
  }
}

// user login
export function login(){

  return dispatch => {
    Promise.resolve( reqwest({
      url: `${MAIN_URL}/login`
    }))

      .then(res => JSON.parse)
      .then(res => {
        if(res.result){
          dispatch({
            type: constant.USER,
            user: res
          })
        }
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




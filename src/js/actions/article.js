/**
 * Created by Administrator on 2015/7/10.
 */

import {Promise} from 'es6-promise';
import * as types from '../constants/articles.js';
import reqwest from 'reqwest';
const MAIN_URL = 'asdfasdlasldkfj';

export function loadArticle(id){

  return dispatch => {
    reqwest(`${MAIN_URL}/detail/${id}`)

    //.then(res => JSON.parse)
      //.then(res => dispatch({
      //    type: types.LOAD_ARTICLE,
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
        ]
        dispatch({
          type: types.LOAD_ARTICLE,
          article: articles[id]
        });
      });
  }
}
/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ArticleItem from './ArticleItem.js';
import shallowEqualScalar from 'redux/lib/utils/shallowEqualScalar'

export default class ArticleDetail extends React.Component{
  componentWillMount(){
    const {params} = this.props;
    this.props.action.loadArticle(params.id);
  }

  componentDidUpdate(preProps){
    this.getDetail(preProps);
  }

  getDetail(preProps){
    const {params} = this.props;
    const preParams = preProps.params;
    if(!shallowEqualScalar(params, preParams)){
      this.props.action.loadArticle(params.id);
    }
  }


  render(){
    const {article, user} = this.props.blog;

    return (
      <article>
        <header>
          <h1>{article.title}</h1>
          <hr />
          <div className="detail-info">
            by <address>{article.author}</address>
            <time>{article.timer}</time>
          </div>
        </header>
        <div className="detial-content">
          {article.content}
        </div>

        {
          user.isLogin ?
            (
            <div>
              <Link to={`admin/post/${article.id}`}>我要约炮, 修改</Link>
            </div>
            ) : ''
        }
      </article>
    );
  }
}




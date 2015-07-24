/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ArticleItem from './ArticleItem.js';

export default class ArticleList extends React.Component{
  componentWillMount(){

    this.props.action.loadArticles();
  }

  render(){
    return (
      <ul className="article-items">
        {this.renderList()}
      </ul>
    );
  }

  renderList(){
    return this.props.blog.articles.map((item, i) =>{
      return <ArticleItem key={i} {...item} />
    });
  }
}




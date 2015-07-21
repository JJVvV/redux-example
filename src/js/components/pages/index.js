/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';
import {Link} from 'react-router';
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import * as articlesActions from '../../actions/articles.js';
import ArticleList from '../ArticleList.js';

@connect(state => ({
  articles: state.articles  //给props添加一个 props.github
}))
export default class Index extends React.Component{


  render(){
    console.log(this.props);
    const { dispatch } = this.props
    const actions = bindActionCreators(articlesActions, dispatch);
    return (

      <section className="wrapper">
       <ArticleList action={actions} {...this.props} />
      </section>
    );
  }
}

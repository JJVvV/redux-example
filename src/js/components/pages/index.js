/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';
import {Link} from 'react-router';
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import * as articlesAction from '../../actions/article1.js';
import ArticleList from '../ArticleList.js';

@connect(state => ({
  blog: state.article  //给props添加一个 props.blog
}))
export default class Index extends React.Component{


  render(){

    const { dispatch } = this.props
    const actions = bindActionCreators(articlesAction, dispatch);
    return (

      <section className="wrapper">
       <ArticleList action={actions} {...this.props} />
      </section>
    );
  }
}

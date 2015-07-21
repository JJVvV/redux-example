/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';
import {Link} from 'react-router';
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import ArticleDetail from '../ArticleDetail.js';
import * as articleAction from '../../actions/article.js'
import ArticleForm from '../ArticleForm.js';
import {authentic} from '../../decorators';
console.log('authentic: ', authentic);
@connect(state => ({
  article: state.article,
  login: state.login
}))
export default class Detail extends React.Component{
  render(){
    const { dispatch, article } = this.props;
    console.log('this.props:', this.props);
    const actions = bindActionCreators(articleAction, dispatch);
    return (
      <section className="wrapper">
        <div className="wrapper-inner">
          <ArticleForm action={actions} {...this.props} />

        </div>

      </section>
    );
  }
}
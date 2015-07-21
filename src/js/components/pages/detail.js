/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';
import {Link} from 'react-router';
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import ArticleDetail from '../ArticleDetail.js';
import * as articleAction from '../../actions/article.js'

console.log(connect);
@connect(state => ({
  article: state.article
}))
export default class Detail extends React.Component{
  render(){
    const { dispatch } = this.props
    const actions = bindActionCreators(articleAction, dispatch);
    return (
      <div className="wrapper">
        <div className="wrapper-inner">
          <ArticleDetail action={actions} {...this.props} />
        </div>
      </div>
    );
  }
}
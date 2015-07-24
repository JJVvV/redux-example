/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';
import {Link} from 'react-router';
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import ArticleDetail from '../ArticleDetail.js';
import * as articleAction from '../../actions/article1.js'
import LoginForm from '../LoginForm.js';
//@connect(state => ({
//  article: state.article
//}))
export default class Login extends React.Component{
  render(){

    return (
      <section className="wrapper">
        <div className="wrapper-inner">
          <LoginForm onLogin={this.onLogin} />
        </div>
      </section>
    );
  }

  onLogin(e){
    e.preventDefault();
    alert('login');
  }
}
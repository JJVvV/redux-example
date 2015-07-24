/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react';
import { Redirect, Router, Route } from 'react-router';
import { Provider } from 'redux/react';
import { createRedux } from 'redux';
import * as blogStore from '../stores';

import Application from '../components/Application.js'
import Detail from '../components/pages/detail.js'
import Post from '../components/pages/post.js'
import Index from '../components/pages/index.js'
import Login from '../components/pages/login.js'
const redux = createRedux(blogStore);

export default class Root {
  render(){
    const {history} = this.props;

    return(
      <Provider redux={redux}>
        {renderRoutes.bind(null, history)}
      </Provider>
    );
  }
}

function renderRoutes (history) {
  return (
    <Router history={history}>
      <Route component={Application}>
        <Route path="index" component={Index} />
        <Route name="detail" path="detail/:id" component={Detail} onEnter={setLoading}></Route>
        <Route name="post" path="admin/post/:id" component={Post}></Route>
        <Route name="post" path="admin/login" component={Login}></Route>
        <Redirect from="/" to="index" />
      </Route>
    </Router>
  )
}

function onEnter(nextState, transition){
  debugger;
  const login = blogStore.article(null, {type: 'USER'});
  if(!login.isLogin){
    transition.to('/admin/login');
  }
}

function setLoading(nextState, transition){
  redux.getState().article.loading = true;
}
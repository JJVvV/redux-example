/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react';
import { Redirect, Router, Route , Navigation} from 'react-router';
import { Provider } from 'redux/react';
import { createRedux } from 'redux';
import * as blogStore from '../stores';
import RouterContainer from '../services/routerContainer.js';
import Application from '../components/Application.js'
import Detail from '../components/pages/detail.js'
import Post from '../components/pages/post.js'
import Index from '../components/pages/index.js'
import Login from '../components/pages/login.js'
import ReduxContainer from '../services/reduxContainer.js';
import after from '../common/after.js';

const redux = createRedux(blogStore);
ReduxContainer.set(redux);
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
      <Route component={Application} onEnter={setJwt}>
        <Route path="index" component={Index} onEnter={setLoading} />
        <Route name="detail" path="detail/:id" component={Detail} onEnter={setLoading}></Route>
        <Route name="post" path="admin/post/:id" component={Post} onEnter={onNotLogined.after(setLoading)}></Route>
        <Route name="post" path="admin/login" component={Login} onEnter={onLogined}></Route>
        <Redirect from="/" to="index" />
      </Route>
    </Router>
  )
}

function onNotLogined(nextState, transition){

  const state = redux.getState();
  if(!state.article.user.isLogin){
    transition.to('/admin/login');
    return false;
  }
  return true;
}

function onLogined(nextState, transition){

  const state = redux.getState();
  if(state.article.user.isLogin){
    transition.to('/index');
  }
  return true;
}

function setLoading(nextState, transition){
  redux.getState().article.loading = true;
}

function setJwt(){

}

var jwt = localStorage.getItem('jwt');
if(jwt){
  //redux.getState().article.user.jwt = jwt;
  redux.dispatch({type:'USER', user:{jwt:jwt}});
}
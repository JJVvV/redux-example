/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import shallowEqualScalar from 'redux/lib/utils/shallowEqualScalar'

export default class LoginForm extends React.Component{
  //componentWillMount(){
  //  const {params} = this.props;
  //  this.props.action.loadArticle(params.id);
  //}
  //
  //componentDidUpdate(preProps){
  //  this.getDetail(preProps);
  //}
  //
  //getDetail(preProps){
  //  const {params} = this.props;
  //  const preParams = preProps.params;
  //  if(!shallowEqualScalar(params, preParams)){
  //    this.props.action.loadArticle(params.id);
  //  }
  //}


  render(){
    //const {article} = this.props;
    //console.log(this.props);
    return (
      <form action="/url" method="post" className="form form-horizontal">
        <div className="form-group">
          <label for="name" className="control-label col-3">姓名</label>

          <div className="col-9">
            <input id="name" type="text" required className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <label for="password" className="control-label col-3">密码</label>
          <div className="col-9">
            <input id="password" type="password" required className="form-control"/>
          </div>
        </div>

        <div className="form-group col-offset-3">
          <div className="col-9">
            <button className="btn btn-primary" onClick={this.props.onLogin}>提交</button>
          </div>
        </div>
      </form>
    );
  }
}




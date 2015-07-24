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
    const {article} = this.props.blog;
    //console.log(this.props);
    return (
      <form action="/url" className="form form-horizontal" method="POST">
        <div className="form-group">
          <label htmlFor="title" className="control-label col-2">标题</label>
          <div className="col-10">
            <input type="text" name="title" id="title" className="form-control" value={article.title} />

          </div>
        </div>

        <div className="form-group">
          <label htmlFor="upload" className="control-label col-2">上传</label>

          <div className="col-10">
            <input type="file" name="upload" id="upload" className="" />

          </div>
        </div>

        <div className="form-group">
          <label htmlFor="text" className="control-label col-2">正文</label>

          <div className="col-10">
            <textarea name="text" id="text" cols="30" rows="10" value={article.content} className="form-control"></textarea>

          </div>
        </div>

        <div className="form-group">
          <div className="col-10 col-offset-2">
            <button className="btn btn-primary">提交</button>

          </div>
        </div>

      </form>
    );
  }
}




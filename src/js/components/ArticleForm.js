/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react/addons.js';
import {Link} from 'react-router';
import ArticleItem from './ArticleItem.js';
import shallowEqualScalar from 'redux/lib/utils/shallowEqualScalar'

export default class ArticleDetail extends React.Component{
  constructor(){
    super();

    this.state = {
      title:'',
      cover:'',
      content:''
    }
  }

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

  componentWillReceiveProps(nextProp){
    var {title, content, cover} = nextProp.blog.article;
    this.setState({
      title,
      content,
      cover
    });
  }

  render(){
    //const {article} = this.props.blog;


    return (
      <form action="/admin/article" className="form form-horizontal" method="POST" encType="multipart/form-data">
        <input type="hidden" name="id" value={this.props.params.id} />
        <div className="form-group">
          <label htmlFor="title" className="control-label col-2">标题</label>
          <div className="col-10">
            <input type="text" name="title" id="title" className="form-control" valueLink={this.linkState('title')} />

          </div>
        </div>

        <div className="form-group">
          <label htmlFor="cover" className="control-label col-2">上传</label>

          <div className="col-10">
            <input type="file" name="cover" id="cover"  className="" />

          </div>
        </div>

        <div className="form-group">
          <label htmlFor="content" className="control-label col-2">正文</label>

          <div className="col-10">
            <textarea name="content" id="content" cols="30" rows="10" valueLink={this.linkState('content')} className="form-control"></textarea>

          </div>
        </div>

        <div className="form-group">
          <div className="col-10 col-offset-2">
            <button type="submit" className="btn btn-primary" onClick={::this.onSubmit}>提交</button>

          </div>
        </div>

      </form>
    );
  }

  onSubmit(e){

    //e.preventDefault();
    //var {title, cover, content} = this.state;
    //var id = this.props.params.id;
    //this.props.action.saveArticle({title, cover, content, id});
  }
}

Object.assign(ArticleDetail.prototype, React.addons.LinkedStateMixin);



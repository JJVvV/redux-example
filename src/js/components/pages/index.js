/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';

import ArticleList from '../ArticleList.js';


export default class Index {


  render(){

    return (
      <section className="wrapper">
       <ArticleList {...this.props} />
      </section>
    );
  }
}

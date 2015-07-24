/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';
import ArticleForm from '../ArticleForm.js';

export default class Detail{
  render(){

    return (
      <section className="wrapper">
        <div className="wrapper-inner">
          <ArticleForm {...this.props} />
        </div>

      </section>
    );
  }
}
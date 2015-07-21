/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Header from './Header'
import Footer from './Footer'


export default class Application extends React.Component{

  constructor(props, context){
    super(props, context);

  }

  render(){
    return (
      <div id="layout">
        <Header />
          <div id="main">
            {this.props.children}
          </div>
        <Footer />
      </div>
    );
  }
}
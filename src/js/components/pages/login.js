/**
 * Created by Administrator on 2015/7/10.
 */

import React from 'react';
import LoginForm from '../LoginForm.js';

//@connect(state => ({
//  article: state.article
//}))
export default class Login{
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
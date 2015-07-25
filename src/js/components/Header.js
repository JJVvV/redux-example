/**
 * Created by Administrator on 2015/7/10.
 */

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import NavItem from './NavItem.js'
import Logo from './Logo.js'

const list = [
  {link:'admin/login', text: 'login'},
  {link:'index', text: 'blog'},
  {link:'#', text: 'index3'},
  {link:'#', text: 'index4'}
];

export default class Header extends React.Component {

  render(){

    return(
      <header className="site-header">
        {this.renderLogo()}

        {::this.renderNav()}
      </header>
    );
  }

  renderLogo(){
    return (
      <Logo />
    );
  }

  renderNav(){
    var navList = list.map((item, i) => {
      if(item.link == 'admin/login' && this.props.isLogin){
        return <NavItem><a href="javascript:;"  onClick={::this.logout}>logout</a></NavItem>
      }
      return <NavItem key={i} {...item} />
    });

    return (
      <nav className="nav">
        <ul className="nav-items">
          {navList}
        </ul>

      </nav>
    );
  }

  logout(e){
    e.preventDefault();
    this.props.action.logout();
  }
}
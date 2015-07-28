/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
var baseImgUrl = '/upload/';
export default class SocialItem{

  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }

  render(){

    const {title, id,content, cover} = this.props;

    return(
      <li className="article-item">
        <Link to={`detail/${id}`} className="article-item-link clearfix">
          <div className="article-item-content">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
          <div className="article-item-cover">
            <img src={baseImgUrl + cover} alt=""/>
          </div>
        </Link>

      </li>
    );
  }


}
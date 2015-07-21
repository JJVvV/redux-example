/**
 * Created by Administrator on 2015/7/10.
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class SocialItem{

  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
  }

  render(){

    const {title, id, img} = this.props;
    const style = {
      backgorundImage: `url(${img})`
    };
    return(
      <li className="article-item">
        <Link to={`detail/${id}`} className="article-item-link">
          <div className="header">
            <h3>{title}</h3>
          </div>
          <div className="img" style={style}></div>
        </Link>

      </li>
    );
  }


}
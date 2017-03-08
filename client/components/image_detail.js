/**
 * Created by aliyy on 2017/3/8.
 */
import React from 'react';

const ImageDetail = (props) => {
  // props.picture => this is the image object
  // props.picture.title
  // props.picture.link
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.picture.link} alt=""/>
      </div>
      <div className="media-right">
        {props.picture.title}
      </div>
    </li>
  )
};

export default ImageDetail;
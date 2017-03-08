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
      <div className="media-body">
        <h4 className="media-dialog">
          {props.picture.title}
        </h4>
        <p>
          {props.picture.description}
        </p>
      </div>
    </li>
  )
};

export default ImageDetail;
/**
 * Created by aliyy on 2017/3/8.
 */
import React from 'react';

const ImageDetail = (props) => {
  // props.picture => this is the image object
  // props.picture.title
  // props.picture.link
  return (
    <li>
      <img src={props.picture.link} alt=""/>
      {props.picture.title}
    </li>
  )
};

export default ImageDetail;
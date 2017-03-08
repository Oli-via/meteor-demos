/**
 * Created by aliyy on 2017/3/8.
 */
import React from 'react';
import ImageScore from './image_score'

const ImageDetail = (props) => {
  // props.image => this is the image object
  // props.image.title
  // props.image.link
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} alt=""/>
      </div>
      <div className="media-body">
        <h4 className="media-dialog">
          {props.image.title}
        </h4>
        <div>
          {props.image.description}
          <ImageScore ups={props.image.ups} downs={props.image.downs}/>
        </div>
      </div>
    </li>
  )
};

export default ImageDetail;
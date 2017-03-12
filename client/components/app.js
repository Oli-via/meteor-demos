/**
 * Created by aliyy on 2017/3/11.
 */
import React from 'react';
import Header from './header';

export default (props) => {
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  )
}
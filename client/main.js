/**
 * Created by aliyy on 2017/3/8.
 */

// meteor add twbs: bootsrap@3.3.6

// any js in here is automatically ran for us

import React from 'react';
import ReactDom from 'react-dom';
import ImageList from './components/image_list';

const App = () => {
  return (
    <div>
      <ImageList>

      </ImageList>
    </div>
  )
};

// 不加这个方法的话，querySelector会在dom形成之前执行，就会报错，找不到这个dom
Meteor.startup(() => {
  ReactDom.render(<App />, document.querySelector("#app"));
});

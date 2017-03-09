/**
 * Created by aliyy on 2017/3/8.
 */
import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>
      hello
    </div>
  )
};

Meteor.startup(() => {
  ReactDom.render(<App/>, document.querySelector(".container"));
});
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

// 不引入bins.js的话，bins.js里的Meteor method就不会执行
import { Bins } from '../imports/collections/bins';


Meteor.startup(()=>{
  ReactDom.render(<App/>, document.querySelector(".container"));
});
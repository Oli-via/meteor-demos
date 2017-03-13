import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';

// 不引入bins.js的话，bins.js里的Meteor method就不会执行
import Bins from '../imports/collections/bins';

// 把routes定义成jsx形式
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BinsList}/>
      <Route path='bins/:binId' component={BinsMain}/>
    </Route>
  </Router>
);

Meteor.startup(()=>{
  ReactDom.render(routes, document.querySelector(".container"));
});
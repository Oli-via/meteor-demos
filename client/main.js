/**
 * Created by aliyy on 2017/3/8.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link_create';
import { Links } from '../imports/conllections/links';
import LinkList from './components/link_list';

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  )
};

Meteor.startup(() => {
  ReactDom.render(<App/>, document.querySelector(".container"));
});
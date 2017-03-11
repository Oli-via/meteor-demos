/**
 * Created by aliyy on 2017/3/8.
 */
import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/conllections/links';
// webapp是handle request的中间件，类似于ssh的filter
import { WebApp } from 'meteor/webapp';
// ConnectRoute根据不同的request url做不同的操作，类似于express的router
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function () {
    return Links.find({});
  })
});

const middleware = ConnectRoute(function (router) {
  router.get('/:token', req => console.log(req) );
});
WebApp.connectHandlers.use(middleware);
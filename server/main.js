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

function onRoute(req, res, next) {
  // find the item which token equals to req.params.token in Links collection
  const link = Links.findOne({ token: req.params.token });
  if (link) {

    // 在link这条数据中增加（$increament）clicks += 1
    Links.update(link, { $inc: { clicks: 1}});

    // 307: redirect to link.url
    res.writeHead(307, { 'location':link.url });
    res.end();
  } else {
    next();
  }

}

const middleware = ConnectRoute(function (router) {
  router.get('/:token', onRoute );
});
WebApp.connectHandlers.use(middleware);
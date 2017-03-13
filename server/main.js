/**
 * Created by aliyy on 2017/3/11.
 */
import { Meteor } from 'meteor/meteor';

// 不引入bins.js的话，bins.js里的Meteor method就不会执行
import Bins from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function () {
    return Bins.find({ ownerId: this.userId });
  });

  Meteor.publish('sharedBins', function () {
    // Meteor.users找到app里所有的user
    const user = Meteor.users.findOne(this.userId);

    if (!user) { return; }

    const email = user.emails[0].address;

    // 在Bins里找sharedWith属性，找到的是array，在array里找等于email的ele
    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email } }
    });
  });
});
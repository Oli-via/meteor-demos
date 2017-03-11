/**
 * Created by aliyy on 2017/3/11.
 */
import { Meteor } from 'meteor/meteor';

// 不引入bins.js的话，bins.js里的Meteor method就不会执行
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function () {
    console.log(Bins.find({ ownerId: this.userId }));
    return Bins.find({ ownerId: this.userId });
  })
});
/**
 * Created by aliyy on 2017/3/11.
 */
import { Mongo } from 'meteor/mongo';

// this.userId是meteor authentication封装的方法，可以获得已经登陆的用户id
// 不用箭头函数是因为这里使用到了this
Meteor.methods({
  'bins.insert': function () {
    return Bins.insert({
      createAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },
  'bins.remove': function (bin) {
    return Bins.remove(bin);
  },
  'bins.update': function (bin, content) {
    // $set: { content: content }： set the content value with the content
    // 就是替换content的内容
    // return Bins.update(bin._id, { $set: { content: content } });
    return Bins.update(bin._id, { $set: { content } });
  }
});

export default Bins = new Mongo.Collection('bins');

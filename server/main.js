/**
 * Created by aliyy on 2017/3/8.
 */
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employee';
import _ from 'lodash';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  const numberRecords = Employees.find({}).count();
  if (!numberRecords){
    // 第二个参数的function会被调用5000次，.times相当于for循环
    _.times(5000, () => {
      const { name, email, phone} = helpers.createCard();
      // 等于 const name = helpers.createCard().name;

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    })
  }

});
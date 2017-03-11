/**
 * Created by aliyy on 2017/3/10.
 */
import  { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

// 方法执行的时候客户端和浏览器会同时执行
Meteor.methods({
  'links.insert': (url) => {
    // console.log('attempting to save', url);
     // validUrl.isUri(url) 返回值是true的话，就会通过check，如果是false，check函数就会抛出error
    check(url, Match.Where(url => validUrl.isUri(url)));

  //  save the url
    const token = Math.random().toString(36).slice(-5);
    Links.insert({ url, token, clicks: 0 });
  }
});

export const Links = new Mongo.Collection('links');
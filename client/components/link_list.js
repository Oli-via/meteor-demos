/**
 * Created by aliyy on 2017/3/10.
 */
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } from '../../imports/conllections/links';

class LinkList extends Component {
  renderRows(){
    return this.props.links.map(link => {
      const { url, clicks, token } = link;
      const shortLink = `http://localhost:3000/${token}`;

      return (
        <tr key={token+url}>
          <td>{url}</td>
          <td>
            <a href={shortLink}>{shortLink}</a>
          </td>
          <td>
            {clicks}
          </td>
        </tr>
      );
    });
  }
  render(){
    return (
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Address</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

// createContainer第二个参数是要注入数据的组件
export default createContainer(() => {
  Meteor.subscribe('links');
  return { links: Links.find({}).fetch() }
}, LinkList);
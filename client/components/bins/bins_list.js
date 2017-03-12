/**
 * Created by aliyy on 2017/3/11.
 */

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Bins from '../../../imports/collections/bins';

class BinsList extends Component {
  onBinRemove (bin){
    Meteor.call('bins.remove', bin);
  }
  renderList(){
    return this.props.bins.map( bin => {
      return (
        <li className="list-group-item" key={bin._id}>
          Bin {bin._id}
          <span className="pull-right">
            {/*onClick={()=>{this.onBinRemove(bin)}}*/}
            {/*这样写会在点击的时候才触发onBinRemove*/}
            {/*如果写成这样：onClick={this.onBinRemove(bin)}*/}
            {/*则会在渲染的时候立即触发，但是需要不同的bin，所以写成函数的形式*/}
            <button
              className="btn btn-danger"
              onClick={()=>{this.onBinRemove(bin)}}>
              Remove
            </button>
          </span>
        </li>
      )
    })
  }

  render(){
    return (
      <ul className="list-group">
        { this.renderList() }
      </ul>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');
  return { bins: Bins.find({}).fetch() };
  // return {};
}, BinsList);
/**
 * Created by aliyy on 2017/3/11.
 */
import React, { Component } from 'react';
import Accounts from './accounts';
import { Bins } from '../../imports/collections/bins';
import { Link, browserHistory } from 'react-router';

class Header extends Component {

  onBinClick(event){
    event.preventDefault();
    // error后的第二个参数是bins.insert返回的数据，这里返回的是创建的条目的_id
    Meteor.call('bins.insert', (error, binId) => {
      // 转到push的url页
      browserHistory.push(`/bins/${binId}`);
    });
  }

  render(){
    return (
      <div>
        <nav className="nav navbar-default">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand">Markbin</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
                <Accounts/>
            </li>
            <li>
              <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
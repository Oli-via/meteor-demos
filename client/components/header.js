/**
 * Created by aliyy on 2017/3/11.
 */
import React, { Component } from 'react';
import Accounts from './accounts';
import { Bins } from '../../imports/collections/bins';

class Header extends Component {

  onBinClick(event){
    event.preventDefault();
    console.log(1);
    Meteor.call('bins.insert', function () {
      console.log(2);
    });
  }

  render(){
    return (
      <div>
        <nav className="nav navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand">Markbin</a>
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
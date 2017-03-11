/**
 * Created by aliyy on 2017/3/11.
 */
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount(){
  //  render the Blaze accounts form
  //  then find the div we just rendered in the 'render' method
  //  and place the Blaze accounts form in that div

    // render Template.loginButtons to ReactDom.findDOMNode( this.refs.container )
    this.view = Blaze.render( Template.loginButtons,
      ReactDom.findDOMNode( this.refs.container ));

  }
  componentWillUnmount(){
  // Go find the forms we create and destroy them
  //  we need to clean up those forms ourselves
    Blaze.remove(this.view); 
  }
  render(){
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
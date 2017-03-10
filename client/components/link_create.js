/**
 * Created by aliyy on 2017/3/10.
 */
import React, { Component } from 'react';

class LinkCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { error: ''};
  }
  handleSubmit(event){
    event.preventDefault();
    // console.log(this.refs.link.value);
    // console.log(this.refs.link);

    // 通过这里调用links.insert方法，然后客户端和服务器都执行了此方法（都console.log出一句话）
    Meteor.call('links.insert', this.refs.link.value, (error) => {
      if (error) {
        this.setState({ error: 'Enter a valid URL'});
      } else {
        this.setState({ error: '' });
        this.refs.link.value = '';
      }
    });
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          {/* input标签中加上ref="input"，就可以在组件里使用this.refs.input获得值 */}
          <input ref="link" className="form-control"/>
        </div>
        <div className="text-danger">{ this.state.error }</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
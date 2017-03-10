/**
 * Created by aliyy on 2017/3/10.
 */
import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSubmit(event){
    event.preventDefault();
    console.log(this.refs.input.value);
    console.log(this.refs.input);
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          {/* input标签中加上ref="input"，就可以在组件里使用this.refs.input获得值 */}
          <input ref="input" className="form-control"/>
        </div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
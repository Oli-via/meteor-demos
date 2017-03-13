/**
 * Created by Olivia on 2017/3/13.
 */
import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';

// 把下面的文件引入进来，立即执行此文件，而不用赋值给一个变量
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {
  onEditorChange(content){
  //  参数content是用户input的内容
    Meteor.call('bins.update', this.props.bin, content);
  }
  render(){
    if (!this.props.bin){
      return <div>Loading...</div>
    }

    return(
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }}
          value={this.props.bin.content}
        />
      </div>
    )
  }
}

export default BinsEditor;
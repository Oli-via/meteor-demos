/**
 * Created by Olivia on 2017/3/13.
 */
import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component{
  render (){
    if (!this.props.bin){
      return <div></div>;
    }
    // rawHTML是string
    const rawHTML = markdown.toHTML(this.props.bin.content);

    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        {/* HTML转译 xxs attack */}
        <div dangerouslySetInnerHTML={{  __html: rawHTML }}></div>
      </div>
    )
  }
}

export default BinsViewer;
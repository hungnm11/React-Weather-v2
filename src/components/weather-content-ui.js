import React, { Component } from 'react';

class ContentUI extends Component {
  renderContent() {
    const props = this.props;
    console.log(props)
    let content;
    if (props.loading) {
      const timezone = props.data.timezone;
      content = (
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h1>{timezone}</h1>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              content
            </div>
          </div>
        </div>  
      );
    }

    return content;
  }

  render() {
    return (
      <div>
       {this.renderContent()}
      </div>
    );
  }
}

export default ContentUI;
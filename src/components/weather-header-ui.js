import React, {Component} from 'react';

class HeaderUI extends Component {
  renderHeader() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }

  renderContent() {
    const props = this.props;
    let content;
    if (props.loading) {
      const timezone = props.data.timezone;
      content = (
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h1>{}</h1>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              content
            </div>
          </div>
        </div>  
      );
    }
    return (
      content
    );
  }

  render() {
    console.log('PROPS', this.props);
    return (
      <div>
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
}

export default HeaderUI;
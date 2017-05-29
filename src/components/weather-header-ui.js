import React, {Component} from 'react';

class HeaderUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    this.setState({value: event.target.value});
  }

  onHandleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.props.callbackFromParent(this.state.value);
    event.preventDefault();
  }

  renderHeader() {
    console.log('HeaderUI STATE', this.state);
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
            <form className="navbar-form navbar-left" onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" value={this.state.value} onChange={this.onHandleChange} />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    console.log('PROPS', this.props);
    
    return (
        this.renderHeader()
    );
  }
}

export default HeaderUI;
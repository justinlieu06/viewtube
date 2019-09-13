import React from 'react';
import merge from 'lodash/merge';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.signUp(user).then( () => (
      this.props.history.push('/')
    ));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="signup-form-div">
        <form onSubmit={this.handleSubmit} className="signup-form">
          <p className="viewtube">ViewTube</p>
          <p className="signup-header">Create your ViewTube Account</p>
          <p className="signup-subheader">to continue to ViewTube</p>
          <br />
          <div className="s-form">

            <div className="div-input">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </div>
            <br/>
            <div className="div-input">
              <input type="email"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email"
              />
            </div>
            <br />
            <div className="div-input">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </div>
            <div className="login-errors"> {this.renderErrors()} </div>

            {/* <div className="password-requirements"> Password must be 6 or more characters. </div> */}

            <div className="signup-form-buttons">
              {this.props.navLink}
              <input className="session-submit" type="submit" value="Sign Up" />
            </div>
          </div>
        </form>
        
        <span className="login-footer-left">English (United States) </span>
        <span className="login-footer-right">Help Privacy Terms</span>
      </div>
    );
  }
}

export default SignUpForm;

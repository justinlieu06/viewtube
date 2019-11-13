import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogIn = this.demoLogIn.bind(this);
    this.pressSignIn = this.pressSignIn.bind(this);
  }

  pressSignIn(){
    const user = Object.assign({}, this.state);
    this.props.logIn(user).then( () => (
      this.props.history.replace('/')
    ));
    
    // this.props.logIn(user).then( () => (
    //   this.props.history.length <= 3 ? this.props.history.push('/') : this.props.history.goBack()
    // ));
  }

  demoLogIn(e){
    e.preventDefault();

    this.setState({ username: '', password: ''}, ()=> {
      fillIn('DemoUser', 'username')();
      fillIn('123456', 'password')();
    });

    //Credit to Fue
    const fillIn = (string, field) => () => {
      if (string.length > 0) {
        this.setState({ [field]: this.state[field] + string[0] });
        setTimeout(fillIn(string.slice(1), field), 75);
      }
    }

    setTimeout(this.pressSignIn, 800);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.pressSignIn();
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
      <div className="login-form-div">
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="viewtube">
            <span className="v">V</span>
            <span className="i">i</span>
            <span className="e">e</span>
            <span className="w">w</span>
            <span className="t">T</span>
            <span className="u">u</span>
            <span className="b">b</span>
            <span className="e">e</span>
          </div>
          <p className="login-header">Sign In</p>
          <p className="login-subheader">to continue to ViewTube</p>
          <br />
          
          <div className="l-form">
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
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-input"
              />
            </div>
            <div className="login-errors"> {this.renderErrors()} </div>
            
            <div className="demo-div"> Don't want to use your own account? Try Demo mode to sign 
            in with a public account.<input className="demo-button" type="button" 
            value="Demo login" onClick={this.demoLogIn} />
            </div>
            <br />
            <div className="login-form-buttons">
            <div className="form-link">{this.props.navLink}</div>
              <input className="session-submit" type="submit" value="Sign In" />
            </div>

          </div>
        </form>
        {/* <div className="login-footer">
          <span className="login-footer-left">English (United States) </span>
          <span className="login-footer-right">Help Privacy Terms</span>
        </div> */}
      </div>
    );
  }
}

export default LogInForm;
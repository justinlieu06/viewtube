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
    // this.props.logIn(user).then( () => (
    //   this.props.history.push('/')
    // ));
    this.props.logIn(user).then( () => (
      this.props.history.goBack()
    ));
  }

  demoLogIn(e){
    e.preventDefault();
    //INSTANT DEMO LOGIN:
    // this.state = {
    //   username: 'DemoUser',
    //   password: '123456'
    // };

    //Credit to Fue
    const fillIn = (string, field) => () => {
      if (string.length > 0) {
        this.setState({ [field]: this.state[field] + string[0] });
        setTimeout(fillIn(string.slice(1), field), 75);
      }
    }
  
    fillIn('DemoUser', 'username')();
    fillIn('123456', 'password')();

    setTimeout(this.pressSignIn, 1100);
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
          <p className="viewtube" >ViewTube</p>
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
            in with a public account.<input className="demo-button" type="submit" 
            value="Demo login" onClick={this.demoLogIn} />
            </div>
            <br />
            <div className="login-form-buttons">
              {this.props.navLink}
              <input className="session-submit" type="submit" value="Sign In" />
            </div>

          </div>
        </form>
        <span className="login-footer-left">English (United States) </span>
        <span className="login-footer-right">Help Privacy Terms</span>
      </div>
    );
  }
}

export default LogInForm;
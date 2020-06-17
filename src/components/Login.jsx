import { Link } from 'react-router-dom';
import React from 'react';
import { history } from '../helpers/history';
import  { Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
// import { userActions } from '../actions/userActions';
 
 
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
        username: '',
        password: '',
        submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

submitForm(e) {
    e.preventDefault();
 
    const { username, password } = this.state;
     if(username=='admin' && password=='admin'){
         alert("Logged In Successfully!!!");
         this.props.history.push('/')

     }
    }
 
  render() {
    const { loggingIn } = this.props;
    const {username, password, submitted } = this.state;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>


              <form onSubmit={this.submitForm}>
                <fieldset>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                  
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleChange} 
                      name = "username" />
                       {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                  </div>

                  <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      name = "password" />
                      {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                 </div>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                     >
                    Log in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// function mapState(state) {
//   const { loggingIn } = state.authentication;
//   return { loggingIn };
// }

// const actionCreators = {
//   login: userActions.login,
  
// };

 
export default  (Login);

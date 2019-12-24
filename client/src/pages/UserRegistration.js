import React, { Component } from 'react';
import { validUsername, validEmail, passwordValidation } from '../Helpers/OuthHelpers.js'

import '../style/RegistrstionPage.css';

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.usernameElement        = React.createRef();
    this.emailElement           = React.createRef();
    this.passwordElement        = React.createRef();
    this.confirmPasswordElement = React.createRef();
    this.state = {
      errors: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }

  handleRegistration = (e) => {
    e.preventDefault();
    const { errors }      = this.state
    const username        = this.usernameElement.current.value;
    const email           = this.emailElement.current.value;
    const password        = this.passwordElement.current.value;
    const confirmPassword = this.confirmPasswordElement.current.value;


    this.setState({errors: validUsername(username, errors)});
    this.setState({errors: validEmail(email, errors)});
    this.setState({errors: passwordValidation(password, confirmPassword, errors)});
  }

  render() {
    const { errors } = this.state
    return(
      <form className='registration-form' onSubmit={this.handleRegistration}>
        <div className='form-field'>
          <input type='text' className= { errors.username.length > 0 ? 'error-filed registration-field' : 'registration-field' }
            placeholder='Username' ref={this.usernameElement}
            />
          { errors.username.length > 0 &&
            <span className='error'>{errors.username}</span> }
        </div>
        <div className='form-field'>
          <input type='text' className= { errors.email.length > 0 ? 'error-filed registration-field' : 'registration-field' }
            autoComplete="new-password"
            placeholder='Email'
            ref={this.emailElement} 
            />
          { errors.email.length > 0 &&
            <span className='error'>{errors.email}</span> }
        </div>
        <div className='form-field form-field-two-inline'>
          <input type='password' className= { errors.email.length > 0 || errors.confirmPassword > 0  ? 'error-filed registration-field' : 'registration-field' }
            autoComplete="new-password"
            placeholder='Password' ref={this.passwordElement}
            />
          <input type='password' className= { errors.confirmPassword > 0 ? 'error-filed registration-field' : 'registration-field' }
            autoComplete="new-password"
            placeholder='Confirm Password'
            ref={this.confirmPasswordElement} 
            />
          { errors.password.length > 0 &&
            <span className='error error-two-field'>{ errors.password }</span> }
          { errors.confirmPassword.length > 0 &&
            <span className='error error-two-field'>{ errors.confirmPassword }</span> }
        </div>
        <div className='form-field form-field-btn-div'>
          <button type='submit' className='main-btn submit-btn'>Register Now</button>
        </div>
      </form>
    )
  }
}

export default UserRegistration;

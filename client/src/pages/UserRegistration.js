import React, { Component } from 'react';

import '../style/RegistrstionPage.css';

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.usernameElement        = React.createRef();
    this.emailElement           = React.createRef();
    this.passwordElement        = React.createRef();
    this.confirmPasswordElement = React.createRef();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    const username        = this.usernameElement.current.value;
    const email           = this.emailElement.current.value;
    const password        = this.passwordElement.current.value;
    const confirmPassword = this.confirmPasswordElement.current.value;
    const errors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    validUsername(username, errors);
    validEmail(email, errors);
    passwordValidation(password, confirmPassword, errors);

    console.log(errors);
  }

  render() {
    return(
      <form className='registration-form' onSubmit={this.handleRegistration}>
        <div className='form-field'>
          <input type='text' className='registration-field' placeholder='Username' ref={this.usernameElement} />
        </div>
        <div className='form-field'>
          <input type='text' className='registration-field' autoComplete="new-password" placeholder='Email' ref={this.emailElement} />
        </div>
        <div className='form-field form-field-two-inline'>
          <input type='password' className='registration-field' autoComplete="new-password" placeholder='Password' ref={this.passwordElement} />
          <input type='password' className='registration-field' autoComplete="new-password" placeholder='Confirm Password' ref={this.confirmPasswordElement} />
        </div>
        <div className='form-field form-field-btn-div'>
          <button type='submit' className='main-btn submit-btn'>Register Now</button>
        </div>
      </form>
    )
  }
}

const validUsername = (username, errors) => {
  if(username.length === 0) {
    errors.username = 'Can\'t be blank';
  } else if (username.length === 1) {
    errors.username = 'Username must be greater then one';
  } else {
    return;
  }
}

const validEmail = (email, errors) => {
  if(email.length === 0) {
    errors.email = 'Can\'t be blank';
    return;
  }

  var emailRegEx = /\S+@\S+\.\S+/;
  const isValid = emailRegEx.test(email);
  if(isValid) {
    return;
  } else {
    errors.email = 'Invalid email format';
  }
}

const passwordValidation = (password, confirmPassword, errors) => {
  if(password.length <= 5) {
    errors.password = 'Password must be at least 6 characters long'
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Password don\'t match'
  } else {
    return;
  }
}

export default UserRegistration;

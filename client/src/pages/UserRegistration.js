import React, { Component } from 'react';

import '../style/RegistrstionPage.css';

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.usernameElement = React.createRef();
    this.emailElement = React.createRef();
    this.passwordElement = React.createRef();
    this.confirmPasswordElement = React.createRef();
  }

  render() {
    return(
      <form className='registration-form' onSubmit={this.handleRegistration}>
        <div className='form-field'>
          <input type='text' className='registration-field' placeholder='Username' ref={this.usernameElement} />
        </div>
        <div className='form-field'>
          <input type='email' className='registration-field' autoComplete="new-password" placeholder='Email' ref={this.emailElement} />
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

export default UserRegistration;
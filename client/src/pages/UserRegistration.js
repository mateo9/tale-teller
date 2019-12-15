import React, { Component } from 'react';

import '../style/RegistrstionPage.css';

class UserRegistration extends Component {
  render() {
    return(
      <form className='registration-form'>
        <div className='form-field'>
          <input type='text' className='registration-field' placeholder='Username' />
        </div>
        <div className='form-field'>
          <input type='email' className='registration-field' autocomplete="new-password" placeholder='Email' />
        </div>
        <div className='form-field form-field-two-inline'>
          <input type='password' className='registration-field' autocomplete="new-password" placeholder='Password' />
          <input type='password' className='registration-field' autocomplete="new-password" placeholder='Confirm Password' />
        </div>
        <div className='form-field form-field-btn-div'>
          <button type='submit' className='main-btn submit-btn'>Register Now</button>
        </div>
      </form>
    )
  }
}

export default UserRegistration;
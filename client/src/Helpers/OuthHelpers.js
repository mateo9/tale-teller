export const validUsername = (username, errors) => {
    if(username.length === 0) {
      errors.username = 'Can\'t be blank';
    } else if (username.length === 1) {
      errors.username = 'Username must be greater then one';
    } else if(/\s/.test(username)) {
      errors.username = 'Username can\'t contain whitespace'
    } else {
      return;
    }

    return errors;
  }

  export const validEmail = (email, errors) => {
    if(email.length === 0) {
      errors.email = 'Can\'t be blank';
      return errors;
    }

    var emailRegEx = /\S+@\S+\.\S+/;
    const isValid = emailRegEx.test(email);
    if(isValid) {
      return;
    } else {
      errors.email = 'Invalid email format';
    }

    return errors;
  }

  export const passwordValidation = (password, confirmPassword, errors) => {
    if(password.length <= 5) {
      errors.password = 'Password must be at least 6 characters long'
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Password don\'t match'
    } else {
      return;
    }

    return errors;
  }
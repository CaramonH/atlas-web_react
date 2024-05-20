import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  loginParagraph: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '1rem 2rem 1rem 4rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '1rem 2rem 1rem 4rem',
  },
  labelInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '.5rem',
  },
  label: {
    paddingRight: '.5rem',
  },
  input: {
    border: '1px solid #00003C',
    borderRadius: '8px',
    boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',
    marginBottom: '1rem',
    padding: '.5rem',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
  button: {
    backgroundColor: '#1ED2AF',
    border: '1px solid #00003C',
    borderRadius: '8px',
    padding: '.4rem',
    boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    ':focus': {
      borderColor: '#1ED2AF',
      outline: '2px solid #1ED2AF',
    },
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
    console.log('Log in button clicked my guy');
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value }, this.checkFormValidity);
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value }, this.checkFormValidity);
  }

  checkFormValidity = () => {
    const { email, password } = this.state;
    const enableSubmit = email !== '' && password !== '';
    this.setState({ enableSubmit: enableSubmit });
  }

  render() {
    const { email, password, enableSubmit } = this.state
    return (
      <div className={css(styles.loginBody)}>
        <p className={css(styles.loginParagraph)}>
          Login to access the full dashboard
        </p>
        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.labelInputContainer)}>
            <label className={css(styles.label)} htmlFor="email">Email:</label>
            <input
              className={css(styles.input)}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className={css(styles.labelInputContainer)}>
            <label className={css(styles.label)} htmlFor="password">Password:</label>
            <input
              className={css(styles.input)}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input
            className={css(styles.button)}
            type="submit"
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;

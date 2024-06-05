import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

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
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '1.3rem',
    margin: '1rem 2rem 1rem 4rem',
    '@media (max-width: 900px)': {
      // Styles for screens smaller than 900px
      flexDirection: 'column',
    },
  },

  labelInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 900px)': {
      marginBottom: '.5rem',
    },
  },

  label: {
    paddingRight: '.5rem',
  },

  input: {
    marginRight: '1rem',
    border: '1px solid #00003C',
    borderRadius: '8px',
    boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',
    '@media (max-width: 900px)': {
      margin: '0',
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
      email: '',
      password: '',
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
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
              value="Login"
              disabled={!enableSubmit}
            />
          </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
};

export default Login;
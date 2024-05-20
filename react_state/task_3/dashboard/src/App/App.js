import React, { Component } from "react";
import './Global.css';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
//import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';

const styles = StyleSheet.create({

  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottom: '5px solid #00003C',
    '@media (max-width: 900px)': {
      flexDirection: 'column-reverse',
    },
  },

  headerNotifications: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '@media (max-width: 900px)': {
      width: '100%',
      alignItems: 'flex-end',
    },
  },

  newsMarginLeft: {
    marginLeft: '4rem',
  },

  newsMargin: {
    marginLeft: '40px',
  },

  footer: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontStyle: 'italic',
    fontSize: '1.1rem',
    borderTop: '5px solid #00003C',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '0',
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ],
    };
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      }
    });
  }

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      }
    });
  }

  markNotificationAsRead = (id) => {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)
    });
    console.log(`Notification ${id} has been marked read`);
  }

  componentDidMount() {
    this.handleKeyDown = (event) => {
      if(event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        alert('Logging you out');
        this.logOut();
      }
    };

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render () {
    const { listCourses, listNotifications, displayDrawer, user } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <>
          <div className={css(styles.headerWrapper)}>
            <Header />
            <div className={css(styles.headerNotifications)}>
              <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer} />
            </div>
          </div>
          <div className={css(styles.body)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course List'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <div className={css(styles.newsMargin)}>
              <BodySection title='News from the School'>
                <p className={css(styles.newsMarginLeft)}>Caramon is number one!!</p>
              </BodySection>
            </div>
          </div>
          <div>
            <Footer footerClassName={css(styles.footer)} />
          </div>
        </>
      </AppContext.Provider>
    );
  }
}

export default App;
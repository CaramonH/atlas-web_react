import React, { Component } from "react";
import './Global.css';
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentDidMount() {
    this.handleKeyDown = (event) => {
      if(event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        alert('Logging you out');
        this.props.logOut();
      }
    };

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render () {
    const { isLoggedIn } = this.props;
    const { listCourses, listNotifications } = this.state;

    const styles = StyleSheet.create({
      body: {
        textAlign: 'center',
      },

      headerWrapper: {
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        borderBottom: '5px solid #00003C',
      },

      headerNotifications: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
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
      },
    });


    return (
      <>
        <div className={css(styles.headerWrapper)}>
          <Header />
          <div className={css(styles.headerNotifications)}>
            <Notifications listNotifications={listNotifications} />
          </div>
        </div>
        <div className={css(styles.body)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course List'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>Caramon is number one!!</p>
          </BodySection>
        </div>
        <div>
          <Footer footerClassName={css(styles.footer)} />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
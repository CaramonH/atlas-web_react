import React from "react";
import PropTypes from 'prop-types';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';
import { Map } from 'immutable';

function Footer({ footerClassName, user }) {
  return (
    <footer className={footerClassName}>
      <>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
        {user.isLoggedIn && (
          <p>
            <a href="mailto:contact@school.com"> Contact us</a>
          </p>
        )}
      </>
    </footer>
  );
}

Footer.propTypes = {
  footerClassName: PropTypes.string,
};

export function mapStateToProps(state) {
  const uiReducer = state.ui;
    const isLoggedIn = uiReducer.get('isUserLoggedIn', false);
    return { user: { isLoggedIn } };
};

export default connect(mapStateToProps)(Footer);
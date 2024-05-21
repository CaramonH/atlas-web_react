import React from "react";
import PropTypes from 'prop-types';
import { getFullYear, getFooterCopy } from '../utils/utils';
import UserContext from '../App/AppContext';

function Footer({ footerClassName }) {
  return (
    <footer className={footerClassName}>
      <UserContext.Consumer>
        {({ user }) => (
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
        )}
      </UserContext.Consumer>
    </footer>
  );
}

Footer.propTypes = {
  footerClassName: PropTypes.string,
};

export default Footer;
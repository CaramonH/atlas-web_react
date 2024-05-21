import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodyFont: {
    fontFamily: "'Galano Grotesque Alt', sans-serif;",
  },

  titleMarginLeft: {
    marginLeft: '4rem',
  },
})

class BodySection extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css(styles.bodyFont)}>
        <h2 className={css(styles.titleMarginLeft)}>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySection;
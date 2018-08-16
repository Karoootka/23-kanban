import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

export function Header() {
  return (
    <div className={styles.header}>
      <h1>KANBAN APP</h1>
    </div>
  );
}

// Header.contextTypes = {
//   router: PropTypes.object,
// };
//
// Header.propTypes = {
//   toggleAddPost: PropTypes.func.isRequired,
//   switchLanguage: PropTypes.func.isRequired,
//   intl: PropTypes.object.isRequired,
// };

export default Header;

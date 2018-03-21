import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

const Tab = ({ title, children }) => {
    return (
        <div className={styles.tab}>{children}</div>
    );
}

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Tab;

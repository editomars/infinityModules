import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import styles from './Tab.css';

const Tab = ({ currentSelectedTab, , onSelect, theme, layout, children }) => {
    return (
        <div className={styles.tab}>{children}</div>
    );
}

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default Tab;

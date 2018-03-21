import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.css';

const ProgressBar = ({ children, progress, striped, animated, state}) => {
      return(
        <div className={`${styles.progressBar}`}>
            <div style={{width: `${progress}%` }} className={`${styles.filler} ${styles.striped} ${styles.animated} ${styles[state]}`}>{children}</div>
        </div>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    state: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
    children: PropTypes.node
};

export default ProgressBar;

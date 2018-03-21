import React from 'react';
import PropTypes from 'prop-types';
import styles from './Col.css';

const Col = ({ size }) => {
    const colSize =(() => {
        const splitCol = (size / 12) * 100;
        return { width: `${splitCol}%`};
    })();
    if(size >= 1 && size <= 12) {
        return(
            <div className={`${styles.col}`} style={colSize}></div>
        );
    }
    return(
        <div hidden></div>
    )
}

Col.propTypes = {
    size: PropTypes.number,
}

Col.defaultProps = {
    size: 1
}

export default Col;

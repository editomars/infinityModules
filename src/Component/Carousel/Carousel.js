import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.css';

const Carousel = ({ size, images }) => {
    return(
        <div className={`${styles.carouselContainer}`}>
            <div style = {{ backgroundImage: `url(${images})`}} className={styles[`image-${size}`]}></div>
        </div>
    );
};

Carousel.proptypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    images: PropTypes.string.isRequired,
};

Carousel.defaultProps = {
    size: 'medium'
};

export default Carousel;

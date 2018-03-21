import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartoonNetworkSpinner.css';

const CartoonNetworkSpinner = ({ images }) => {
    /*images: [
        'https://www.cartoonnetworkamazone.com/wp-content/themes/cna/assets/img/discover/things-to-do/cna-store/main-char.png',
        'http://moziru.com/images/cartoon-network-clipart-transparent-1.png',
        'https://img00.deviantart.net/7aa7/i/2016/208/b/c/cartoon_network_week_07__chowder_cast_by_the_driz-dabkl2s.png',
        'https://img00.deviantart.net/7013/i/2012/322/7/f/bubbly_bubbles_by_jerimin19-d5lc4uj.png',
        'https://i.pinimg.com/originals/8f/97/56/8f9756c57d99d5e1a1e2b1c243f76552.png',
        'https://vignette.wikia.nocookie.net/johnnybravo/images/9/9a/Johnny_bravo_004.gif/revision/latest?cb=20121128194900',
        'http://i.imgur.com/4EViWPk.png',
        'http://moziru.com/images/cartoon-network-clipart-transparent-7.png'
    ]*/

    return(
        <div className={`${styles.cartoonContainer}`}>
            <div style = {{ backgroundImage: `url(${images})`}} className={`${styles.imageSize}`}></div>
        </div>
    );
};

CartoonNetworkSpinner.proptypes = {
    images: PropTypes.string.isRequired,
};

export default CartoonNetworkSpinner;

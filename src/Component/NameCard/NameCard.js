import React from 'react';
import Proptypes from 'prop-types';
import styles from './NameCard.css';

const NameCard = ({ name, email, telephone, imageUrl}) => {

    return(
        <div className={`${styles.cardContainer}`}>
            <div style = {{ backgroundImage: `url(${imageUrl})`}} className={`${styles.imageSize}`}></div>
            <div className={`${styles.infoContainer}`}>
                <div className={`${styles.name}`}>{name}</div>
                <div className={`${styles.email}`}>{email}</div>
                <div className={`${styles.telephone}`}>{telephone}</div>
            </div>
        </div>
    );
};

NameCard.proptypes = {
    name: Proptypes.string,
    email: Proptypes.string,
    telephone: Proptypes.string,
    imageUrl: Proptypes.string.isRequired
};


export default NameCard;

import React from 'react';
import PropTypes from 'prop-types';
import { modalOverlay, modal, modalClose, modalTitle, modalBody, modalFooter, hidden } from './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={`${modalOverlay} ${isOpen ? '' : hidden }`}>
            <div className={ modal }>
                <div className={ modalClose } onClick={ onClose }><i className="fa fa-times"></i></div>
                { children }
            </div>
        </div>
    )
};

Modal.Title = ({ children }) =>
    <div className={ modalTitle }>{ children }</div>
Modal.Body = ({ children }) =>
    <div className={ modalBody }>{ children }</div>
Modal.Footer = ({ children }) =>
    <div className={ modalFooter }>{ children }</div>

Modal.propTypes = {
    //Determines weather the modal is visible or not
    isOpen: PropTypes.bool.isRequired,
    //Is called always when the modal is closed
    onClose: PropTypes.bool.isRequired,
    //The children rendered within the modal
    children: PropTypes.bool.isRequired,
};

export default Modal;

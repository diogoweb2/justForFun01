import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const Modal = ({ title, children, handleVisibility, show }) => {
  if (!show) {
    return (
      <Button onClick={handleVisibility} type="link">
        {title}
      </Button>
    );
  }
  return (
    <div>
      <section
        role="dialog"
        tabIndex="-1"
        aria-labelledby="modal-heading-01"
        aria-modal="true"
        aria-describedby="modal-content-id-1"
        className="slds-modal slds-fade-in-open"
      >
        <div className="slds-modal__container">
          <header className="slds-modal__header">
            <h2 className="slds-text-heading_medium slds-hyphenate">{title}</h2>
          </header>
          <div className="slds-modal__content slds-p-around_medium">
            {children}
          </div>
          <footer className="slds-modal__footer">
            <Button onClick={handleVisibility} type="secundary">
              Close
            </Button>
          </footer>
        </div>
      </section>
      <div className="slds-backdrop slds-backdrop_open" />
    </div>
  );
};

Modal.propTypes = {
  /**
   * Modal Title
   */
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  /**
   * event to handle open/close
   */
  handleVisibility: PropTypes.func.isRequired,
  /**
   * show or hide
   */
  show: PropTypes.bool
};

Modal.defaultProps = {
  show: false
};

export default Modal;

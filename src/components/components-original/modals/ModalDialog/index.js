import React from "react";
import Modal from "components/components-original/modals/Modal";
import Dialog from "components/components-original/Dialog";
import PropTypes from "prop-types";

const ModalDialog = (props) => {
  const { children, onClose, isOpen, ...otherProps } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...otherProps}>
      <Dialog onClose={onClose}>{children}</Dialog>
    </Modal>
  );
};

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ModalDialog;

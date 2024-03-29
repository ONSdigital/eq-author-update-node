import React, { useState, useCallback } from "react";

// Convenience wrapper for invoking modals - automates handling of `isOpen` state
const useModal = ({
  component: Modal,
  onConfirm,
  onCancel,
  onClose,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = useCallback(
    (...args) => {
      onConfirm(...args);
      setIsOpen(false);
    },
    [onConfirm]
  );

  const handleCancel = useCallback(
    (...args) => {
      // eslint-disable-next-line no-unused-expressions
      onCancel?.(...args);
      // eslint-disable-next-line no-unused-expressions
      onClose?.(...args);
      setIsOpen(false);
    },
    [onCancel, onClose]
  );

  return [
    useCallback(() => setIsOpen(true), []),
    useCallback(
      () => (
        <Modal
          {...props}
          isOpen={isOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          onClose={handleCancel}
        />
      ),
      [props, isOpen, handleCancel, handleConfirm]
    ),
  ];
};

export default useModal;

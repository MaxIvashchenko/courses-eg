import React from 'react';
import { Modal as MuiModal } from '@mui/material';

interface ModalProps {
  modalNum: number | null;
  closeModal: () => void;
  children: JSX.Element;
}

const Modal = ({ modalNum, closeModal, children }: ModalProps) => (
  <MuiModal
    open={Boolean(modalNum)}
    onClose={closeModal}
    sx={{
      position: 'fixed',
      boxShadow: 24
    }}
    aria-labelledby='modal-modal-title'
    aria-describedby='modal-modal-description'
  >
    {children}
  </MuiModal>
);

export default Modal;

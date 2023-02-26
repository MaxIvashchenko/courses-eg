import React from 'react';
import { Modal as MuiModal } from '@mui/material';

import { ModalContent } from '../ModalContent';

interface ModalProps {
  modalNum: number | null;
  closeModal: () => void;
}

const Modal = ({ modalNum, closeModal }: ModalProps) => (
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
    <ModalContent num={modalNum || 1} />
  </MuiModal>
);

export default Modal;

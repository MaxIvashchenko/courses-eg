import React from 'react';
import { Box, IconButton, Modal as MuiModal } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components/Common';

const ModalWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  maxWidth: '600px',
  width: '60%',
  height: '60%',
  margin: '10% auto 10%',
  background: '#fff',
  backgroundImage: 'url(images/modalLayer.svg)',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: 32,
  borderRadius: 10,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    marginTop: '25%',
    width: '95%',
    padding: 24
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '15%',
    width: '95%',
    padding: 24,
    height: '80%'
  }
}));

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: JSX.Element | JSX.Element[];
}

const Modal = ({ isOpen, closeModal, children }: ModalProps) => (
  <MuiModal
    open={isOpen}
    onClose={closeModal}
    sx={{
      position: 'fixed',
      boxShadow: 24
    }}
    aria-labelledby='modal-modal-title'
    aria-describedby='modal-modal-description'
  >
    <ModalWrapper>
      <IconButton
        onClick={closeModal}
        sx={{
          position: 'absolute',
          top: 4,
          right: 4
        }}
      >
        <IconComponent name='close' width={18} height={18} />
      </IconButton>
      {children}
    </ModalWrapper>
  </MuiModal>
);

export default Modal;

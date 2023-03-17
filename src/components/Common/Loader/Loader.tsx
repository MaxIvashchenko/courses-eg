import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { IconComponent } from '../IconComponent';

const FullPageWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  background: '#00000080',
  zIndex: 99
});

const LoaderWrapper = styled(Box)({
  textAlign: 'center',
  width: '100%',
  height: 48,
  animation: 'spin 2s linear infinite',

  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
});

interface LoaderProps {
  fill?: string;
  isFullPage?: boolean;
}

const Loader = ({ fill, isFullPage }: LoaderProps) =>
  isFullPage ? (
    <FullPageWrapper>
      <LoaderWrapper>
        <IconComponent fill={fill} width={48} height={48} name='loader' />
      </LoaderWrapper>
    </FullPageWrapper>
  ) : (
    <LoaderWrapper>
      <IconComponent fill={fill} width={48} height={48} name='loader' />
    </LoaderWrapper>
  );

export default Loader;

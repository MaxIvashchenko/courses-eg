import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { IconComponent } from '../IconComponent';

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

const Loader = ({ fill }: { fill?: string }) => (
  <LoaderWrapper>
    <IconComponent fill={fill} width={48} height={48} name='loader' />
  </LoaderWrapper>
);

export default Loader;

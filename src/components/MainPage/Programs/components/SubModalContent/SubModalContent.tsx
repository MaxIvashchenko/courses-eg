import React, { ForwardedRef } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, Typography } from '@mui/material';

interface SubModalContent {
  forwardedRef?: ForwardedRef<unknown>;
  title?: string;
  price?: number;
  description?: ReactJSXElement | null;
}

const SubModalContent = ({
  title = '',
  description = null
}: SubModalContent) => (
  <>
    <Typography
      variant='h1'
      textAlign='center'
      color='#a35817'
      sx={{
        pb: { xs: 1, md: 3 }
      }}
    >
      {title}
    </Typography>
    <Box
      sx={{
        overflow: 'scroll',
        flex: 1
      }}
    >
      {description}
    </Box>
  </>
);

export default React.forwardRef((props: SubModalContent, ref) => (
  <SubModalContent {...props} forwardedRef={ref} />
));

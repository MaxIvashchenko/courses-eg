import { Typography } from '@mui/material';

import { Profile as ProfileBlock } from 'blocks';

const { CenteredWrapper } = ProfileBlock;

interface EmptyPageMessageProps {
  message: string;
}

const EmptyPageMessage = ({ message }: EmptyPageMessageProps) => (
  <CenteredWrapper>
    <Typography variant='h3' textAlign='center' sx={{ mb: 8 }}>
      {message}
    </Typography>
  </CenteredWrapper>
);

export default EmptyPageMessage;

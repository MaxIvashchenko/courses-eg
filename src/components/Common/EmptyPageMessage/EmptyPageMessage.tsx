import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/material';
import { paths } from '@src/constants';

import { Profile as ProfileBlock } from 'blocks';
import { IconComponent } from '../IconComponent';

const { CenteredWrapper } = ProfileBlock;

interface EmptyPageMessageProps {
  message: string;
}

const EmptyPageMessage = ({ message }: EmptyPageMessageProps) => {
  const router = useRouter();
  const toMain = () => router.push(paths.main);

  return (
    <CenteredWrapper>
      <Typography
        variant='h3'
        textAlign='center'
        sx={{
          mb: 2,
          p: { xs: 1, md: 4 }
        }}
      >
        {message}
      </Typography>
      <Button
        onClick={toMain}
        variant='text'
        startIcon={<IconComponent name='home' width={18} height={18} />}
        sx={{ m: 0, p: 1 }}
      >
        На главную
      </Button>
    </CenteredWrapper>
  );
};

export default EmptyPageMessage;

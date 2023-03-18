import { memo } from 'react';
import { Button as MuiButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Button = styled(MuiButton)(({ theme }) => ({
  background: 'none',
  borderRadius: 0,
  padding: 32,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderBottom: '1px solid #69381e',
  '& img': {
    borderRadius: '50%'
  },

  '&:hover': {
    background: '#ffffff99',
    '& .MuiTypography-root': {
      color: '#9ac9dc'
    }
  },

  [theme.breakpoints.down('md')]: {
    padding: '8px 0',
    '& img': {
      width: 75,
      height: 75
    }
  }
}));

interface BlockButtonProps {
  title: string;
  id: string;
  clickHandler: (id: string) => void;
}

const BlockButton = ({
  title = '',
  id = '',
  clickHandler
}: BlockButtonProps) => (
  <Button onClick={() => clickHandler(id)}>
    <Typography textAlign='left' variant='h3'>
      {title}
    </Typography>
  </Button>
);

export default memo(BlockButton);

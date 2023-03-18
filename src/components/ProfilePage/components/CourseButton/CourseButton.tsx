import { memo } from 'react';
import Image from 'next/image';
import { Button as MuiButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { imgLoader } from '@src/utils';

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

const Title = styled(Typography)(({ theme }) => ({
  padding: '0 32px',
  textAlign: 'left',

  [theme.breakpoints.down('md')]: {
    padding: '0 16px'
  }
}));

interface CourseButtonProps {
  cover: string;
  title: string;
  id: string;
  clickHandler: (id: string) => void;
}

const CourseButton = ({
  cover = '',
  title = '',
  id = '',
  clickHandler
}: CourseButtonProps) => (
  <Button onClick={() => clickHandler(id)}>
    <Image
      priority
      src={cover}
      height={125}
      width={125}
      blurDataURL={cover}
      loader={imgLoader}
      alt='grey layer small'
    />
    <Title variant='h3'>{title}</Title>
  </Button>
);

export default memo(CourseButton);

import Link from 'next/link';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components';

const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMirror'
})<{ isMirror: boolean }>(({ theme, isMirror }) => ({
  display: 'flex',
  '& svg': {
    width: 28,
    height: 28
  },
  '& a': {
    color: '#000',

    textDecoration: 'none'
  },
  '& p': {
    textAlign: isMirror ? 'left' : 'right',
    fontSize: 16
  },
  '&:hover': {
    '& p,& path': {
      color: '#9ac9dc',
      fill: '#9ac9dc'
    }
  },
  [theme.breakpoints.down('md')]: {
    '& p': {
      display: 'none'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& button': {
      padding: 0
    },
    '& svg': {
      width: 20,
      height: 20
    },

    '& p': {
      fontSize: 12
    }
  }
}));

interface LessonNavButtonProps {
  href: string | null;
  name: string;
  isMirror?: boolean;
}

const LessonNavButton = ({
  href = '',
  isMirror = false,
  name = ''
}: LessonNavButtonProps) => {
  if (name && href) {
    return (
      <Link
        href={href}
        style={{
          color: '#000',
          textDecoration: 'none'
        }}
      >
        <IconWrapper isMirror={isMirror}>
          <p>{!isMirror && name}</p>
          <IconButton>
            <IconComponent name='right' isMirror={isMirror} />
          </IconButton>
          <p>{isMirror && name}</p>
        </IconWrapper>
      </Link>
    );
  }

  return <Box />;
};

export default LessonNavButton;

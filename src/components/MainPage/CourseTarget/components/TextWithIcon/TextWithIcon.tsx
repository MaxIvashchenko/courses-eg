import { memo } from 'react';
import { Box, Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components/Common';

const Container = styled(Box)<{ isMirror: boolean }>(({ theme, isMirror }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: isMirror ? 'row-reverse' : 'row',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    padding: '8px 0'
  }
}));

const IconWrapper = styled(Box)<{ isMirror: boolean }>(
  ({ theme, isMirror }) => ({
    marginRight: isMirror ? 0 : 48,
    marginLeft: isMirror ? 48 : 0,

    '& svg': {
      height: 160,
      width: 160
    },

    [theme.breakpoints.down('sm')]: {
      marginRight: 16,
      marginLeft: 0,

      '& svg': {
        height: 48,
        width: 48
      }
    }
  })
);

const Typography = styled(MuiTypography)<{ isMirror: boolean }>(
  ({ theme, isMirror }) => ({
    textTransform: 'uppercase',
    maxWidth: 650,
    textAlign: isMirror ? 'right' : 'left',

    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  })
);

interface TextWithIconProps {
  isMirror?: boolean;
  icon: string;
  text: string;
}

const TextWithIcon = ({ isMirror = false, icon, text }: TextWithIconProps) => (
  <Container isMirror={isMirror}>
    <IconWrapper isMirror={isMirror}>
      <IconComponent fill='#5a6f49' name={icon} />
    </IconWrapper>
    <Typography sx={{ px: { xs: 0, md: 4 } }} isMirror={isMirror} variant='h4'>
      {text}
    </Typography>
  </Container>
);

export default memo(TextWithIcon);

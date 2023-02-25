import { memo } from 'react';
import { Box, Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components/Common';

const Container = styled(Box)<{ mirror: number }>(({ theme, mirror }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: Boolean(mirror)  ? 'row-reverse' : 'row',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    padding: '8px 0'
  }
}));

const IconWrapper = styled(Box)<{ mirror: number }>(
  ({ theme, mirror }) => ({
    marginRight: Boolean(mirror) ? 0 : 48,
    marginLeft: Boolean(mirror) ? 48 : 0,

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

const Typography = styled(MuiTypography)<{ mirror: number }>(
  ({ theme, mirror }) => ({
    textTransform: 'uppercase',
    maxWidth: 650,
    textAlign: Boolean(mirror)  ? 'right' : 'left',

    [theme.breakpoints.down('sm')]: {
      textAlign: 'left'
    }
  })
);

interface TextWithIconProps {
  mirror?: boolean;
  icon: string;
  text: string;
}

const TextWithIcon = ({ mirror = false, icon, text }: TextWithIconProps) => (
  <Container mirror={Number(mirror)}>
    <IconWrapper mirror={Number(mirror)}>
      <IconComponent fill='#5a6f49' name={icon} />
    </IconWrapper>
    <Typography sx={{ px: { xs: 0, md: 4 } }} mirror={Number(mirror)} variant='h4'>
      {text}
    </Typography>
  </Container>
);

export default memo(TextWithIcon);

import { memo } from 'react';
import {
  Box,
  Button,
  Collapse as MuiCollapse,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components/Common';
import { boxShadow } from '@src/styles';

const ClickBox = styled(Button)<{ background: string; open: boolean }>(
  ({ theme, background, open }) => ({
    width: '100%',
    background,
    marginTop: 16,
    boxShadow: open
      ? '0 2px 10px rgba(0,0,0,0.25), 0 2px 10px rgba(0,0,0,0.22)'
      : '0 28px 48px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',

    '&: hover': {
      opacity: 0.95,
      background,
      boxShadow: open
        ? '0 2px 10px rgba(0,0,0,0.25), 0 2px 10px rgba(0,0,0,0.22)'
        : '0 28px 48px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    },

    [theme.breakpoints.down('sm')]: {}
  })
);

const Collapse = styled(MuiCollapse)(({ theme }) => ({
  minHeight: 300,
  background: '#fff',
  padding: '0 8px',
  margin: '0 16px',
  ...boxShadow,
  borderEndStartRadius: 4,
  borderEndEndRadius: 4,

  [theme.breakpoints.down('sm')]: {}
}));
const IconWrapper = styled(Box)<{ open: boolean }>(({ theme, open }) => ({
  position: 'absolute',
  right: 50,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'all 0.5s ease-out',
  transform: open ? 'scale(1, -1)' : 'scale(1, 1)',

  [theme.breakpoints.down('sm')]: {}
}));

interface CustomAccordionProps {
  title: string;
  descriptions: string[];
  backgroundColor: string;
  switchHandler: () => void;
  checked: boolean;
}

const CustomAccordion = ({
  title,
  descriptions,
  backgroundColor,
  switchHandler,
  checked
}: CustomAccordionProps) => (
  <>
    <ClickBox
      onClick={switchHandler}
      background={backgroundColor}
      open={checked}
    >
      <Typography
        color='#fff'
        p={3}
        textTransform='uppercase'
        fontSize={64}
        variant='h1'
      >
        {title}
      </Typography>
      <IconWrapper open={checked}>
        <IconComponent name='downArrow' fill='#fff' width={42} height={42} />
      </IconWrapper>
    </ClickBox>

    <Collapse in={checked}>
      <Box sx={{ m: { xs: 0, md: 3 } }}>
        <ul>
          {descriptions.map((description) => (
            <li key={description}>
              <Typography variant='h3' p={1}>
                {description}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Collapse>
  </>
);

export default memo(CustomAccordion);

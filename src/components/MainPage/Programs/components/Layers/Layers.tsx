import Image from 'next/image';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const GirlsLayer = styled(Box)(({ theme }) => ({
  '& img': {
    position: 'absolute',
    bottom: 0,
    left: -10,
    width: 500,

    [theme.breakpoints.down('sm')]: {
      display: 'none',
      heught: 0,
      width: 0
    },
    [theme.breakpoints.down('md')]: {
      bottom: -150,
      left: 0,
      width: 300
    },
    [theme.breakpoints.up('md')]: {
      bottom: -70,
      left: 0,
      width: 400
    },
    [theme.breakpoints.up('lg')]: {
      bottom: 0,
      left: -10,
      width: 500
    }
  }
}));
const VerandaLayer = styled(Box)(({ theme }) => ({
  '& img': {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 700,

    [theme.breakpoints.down('sm')]: {
      display: 'none',
      heught: 0,
      width: 0
    },
    [theme.breakpoints.up('sm')]: {
      top: -10,
      right: 0,
      width: 300,
      height: 330
    },
    [theme.breakpoints.up('md')]: {
      right: 0,
      width: 500,
      height: 550
    },
    [theme.breakpoints.up('lg')]: {
      right: 0,
      width: 600,
      height: 660
    },
    [theme.breakpoints.up('xl')]: {
      right: 0,
      width: 700,
      height: 770
    }
  }
}));
const GreyLayer = styled(Box)(({ theme }) => ({
  width: '100%',
  '& img': {
    position: 'absolute',
    top: 0,
    right: 0,

    [theme.breakpoints.down('sm')]: {
      top: -10,
      width: 600,
      height: 330
    },
    [theme.breakpoints.up('sm')]: {
      top: -5,
      right: 0,
      height: 480,
      width: 900
    },
    [theme.breakpoints.up('md')]: {
      top: -10,
      right: 0,
      height: 650,
      width: 1200
    },
    [theme.breakpoints.up('lg')]: {
      top: -10,
      right: 0,
      height: 820,
      width: 1536
    },
    [theme.breakpoints.up('xl')]: {
      top: -300,
      width: '100%',
      height: '100%'
    }
  }
}));
const Layers = () => (
  <>
    <GreyLayer>
      <Image
        width={400}
        height={400}
        src='/images/layer6.svg'
        alt='grey layer'
      />
    </GreyLayer>
    <VerandaLayer>
      <Image width={400} height={800} src='/images/veranda.svg' alt='veranda' />
    </VerandaLayer>
    <GirlsLayer>
      <Image width={400} height={800} src='/images/girls.svg' alt='girls' />
    </GirlsLayer>
  </>
);

export default Layers;

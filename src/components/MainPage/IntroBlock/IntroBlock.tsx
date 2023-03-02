import { memo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Box, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMobile, useScreenHeight } from '@src/hooks';
import { redirectToTelegramPrivateLink } from '@src/utils';

const Title = dynamic(() => import('./components/Title/Title'), { ssr: false });

const SmallLayer = styled(Box)(({ theme }) => ({
  '& img': {
    position: 'absolute',
    top: -190,
    left: -100,

    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

const GridContainer = styled(Grid)<{ minHeight: string | number }>(
  ({ theme, minHeight }) => ({
    maxWidth: 1680,
    margin: '0 auto',
    minHeight,
    position: 'relative',

    backgroundImage: 'url(/images/image1.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'contain',

    [theme.breakpoints.up('xl')]: {
      minHeight: 900
    },
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'inherit'
    }
  })
);

interface IntroBlockProps {
  modalHandler: () => void;
}

const IntroBlock = ({ modalHandler }: IntroBlockProps) => {
  const screenHeight: number = useScreenHeight();
  const isMobile = useMobile();
  const smallScreen = screenHeight < 900;
  const minHeight = !isMobile && smallScreen ? 915 : '100vh';

  return (
    <Box
      id='top'
      sx={{
        background: '#e4e4dc',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <GridContainer minHeight={minHeight} container>
        <SmallLayer>
          <Image
            priority
            src='/images/layer1.svg'
            height={600}
            width={600}
            alt='blue layer small'
          />
        </SmallLayer>
        <Grid
          item
          xs={12}
          sx={{
            px: { xs: 4, sm: 8 },
            mb: { xs: 2, sm: 10 },
            position: 'sticky',
            alignSelf: 'end'
          }}
        >
          <Title />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', sm: 400 }
            }}
          >
            <Button
              size='large'
              variant='contained'
              onClick={modalHandler}
              sx={{
                minWidth: { xs: 0, md: 450 },
                my: 1,
                fontSize: 24,
                textTransform: 'uppercase'
              }}
            >
              Оставить заявку
            </Button>
            <Button
              size='large'
              variant='contained'
              onClick={redirectToTelegramPrivateLink}
              sx={{
                minWidth: { xs: 0, md: 450 },
                my: 1,
                fontSize: 24,
                textTransform: 'uppercase'
              }}
            >
              Связаться с менеджером
            </Button>
          </Box>
        </Grid>
      </GridContainer>
    </Box>
  );
};
export default memo(IntroBlock);

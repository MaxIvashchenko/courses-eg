import React, { useCallback, useState } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Modal } from '@src/components';
import { imagesUrls } from '@src/constants';
import {
  ADDITIONAL_BLOCKS_EXIST_BUSINESS,
  ADDITIONAL_BLOCKS_START_BUSINESS,
  EXIST_BUSINESS_COURSE,
  START_BUSINESS_COURSE
} from '@src/content';

import {
  Contacts,
  Layers,
  ModalContent,
  ProgramButton,
  SubModalContent
} from './components';

const ProgramsContainer = styled(Box)(() => ({
  backgroundImage: `url(${imagesUrls.layer7})`,
  backgroundColor: '#fff',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'bottom',
  width: '100%',
  position: 'relative',
  overflow: 'hidden'
}));

const TopGridContainer = styled(Grid)(({ theme }) => ({
  '&::after': {
    content: '""',
    position: 'absolute',
    right: -8,
    top: -14,
    background: '#78390e',
    width: 10,
    height: 16,
    borderRadius: '50%'
  },
  [theme.breakpoints.down('md')]: {
    '&::after': {
      display: 'none'
    }
  }
}));

const GridItem = styled(Grid)<{ border: string }>(({ theme, border }) => ({
  [`border${border}`]: '3px solid #78390e',
  paddingTop: 32,
  position: 'relative',
  '&::after': {
    content: '""',
    height: '100%',
    position: 'absolute',
    top: 0,
    [border.toLowerCase()]: -6,
    width: 3,
    background: '#78390e'
  },

  [theme.breakpoints.down('md')]: {
    border: 'none',
    '&::after': {
      background: 'none'
    }
  }
}));

interface IAdditionalBlock {
  id: string;
  title: string;
  icon: string;
  description: ReactJSXElement;
  price: number;
}

interface ProgramsProps {
  modalHandler: () => void;
}

const Programs = ({ modalHandler }: ProgramsProps) => {
  const [modalNum, setModalNum] = useState<number | null>(null);
  const [subModal, setSubModal] = useState<IAdditionalBlock | null>(null);

  const courseHandler = useCallback((num: number) => {
    setModalNum(num);
  }, []);

  const additionalBlockHandler = useCallback((block: IAdditionalBlock) => {
    setSubModal(block);
  }, []);

  const closeModal = () => setModalNum(null);
  const closeSubModal = () => setSubModal(null);

  const submitApp = () => {
    modalHandler();
    setModalNum(null);
    setSubModal(null);
  };

  return (
    <ProgramsContainer id='courses'>
      <Layers />
      <Box
        sx={{
          maxWidth: 1680,
          margin: '0 auto',
          zIndex: 20,
          px: { xs: 1, sm: 8 },
          pt: { xs: 2, sm: 8 }
        }}
      >
        <Grid container>
          <GridItem item xs={12} md={6} lg={6} border='Right'>
            <TopGridContainer container justifyContent='flex-end'>
              <Grid item xs={12} md={12} lg={10} pb={1}>
                <ProgramButton
                  background='#624e2d'
                  iconName={START_BUSINESS_COURSE.icon}
                  title={START_BUSINESS_COURSE.title}
                  subTitle={START_BUSINESS_COURSE.subTitle}
                  clickHandler={() => courseHandler(1)}
                />
              </Grid>
              {Object.values(ADDITIONAL_BLOCKS_START_BUSINESS).map((block) => (
                <Grid key={block.id} item xs={12} md={12} lg={8} py={0.5}>
                  <ProgramButton
                    isBlock
                    title={block.title}
                    iconName={block.icon}
                    background={block.buttonBackground}
                    clickHandler={() => additionalBlockHandler(block)}
                  />
                </Grid>
              ))}
            </TopGridContainer>
          </GridItem>
        </Grid>

        <Grid container justifyContent='flex-end'>
          <GridItem item xs={12} md={6} lg={6} border='Left'>
            <Grid container mb={2}>
              <Grid item xs={12} md={12} lg={10} pb={1}>
                <ProgramButton
                  position='Right'
                  background='#bf8747'
                  iconName={EXIST_BUSINESS_COURSE.icon}
                  title={EXIST_BUSINESS_COURSE.title}
                  subTitle={EXIST_BUSINESS_COURSE.subTitle}
                  clickHandler={() => courseHandler(2)}
                />
              </Grid>
              {Object.values(ADDITIONAL_BLOCKS_EXIST_BUSINESS).map((block) => (
                <Grid key={block.id} item xs={12} md={12} lg={8} py={0.5}>
                  <ProgramButton
                    isBlock
                    position='Right'
                    title={block.title}
                    iconName={block.icon}
                    background={block.buttonBackground}
                    clickHandler={() => additionalBlockHandler(block)}
                  />
                </Grid>
              ))}

              {/* <Grid item xs={12} py={2}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Contacts modalHandler={submitApp} />
                </Box>
              </Grid> */}
            </Grid>
          </GridItem>
        </Grid>
      </Box>

      <Modal isOpen={Boolean(modalNum)} closeModal={closeModal} isFixedHeight>
        <ModalContent num={modalNum || 1} />
        <Typography textAlign='center' variant='h2' pb={1}>
          Цена: 500$
        </Typography>
        <Contacts modalHandler={submitApp} />
      </Modal>
      <Modal isOpen={Boolean(subModal)} closeModal={closeSubModal}>
        <SubModalContent {...subModal} />
        <Typography textAlign='center' variant='h2' pb={1}>
          Цена: {subModal?.price}$
        </Typography>
        <Contacts modalHandler={submitApp} />
      </Modal>
    </ProgramsContainer>
  );
};

export default Programs;

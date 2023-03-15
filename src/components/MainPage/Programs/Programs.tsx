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
          pt: { xs: 2, sm: 4 },
          pb: { xs: 2, sm: 4 }
        }}
      >
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent='space-around'>
              <Grid item xs={12} xl={10}>
                <ProgramButton
                  iconName={START_BUSINESS_COURSE.icon}
                  title={START_BUSINESS_COURSE.title}
                  subTitle={START_BUSINESS_COURSE.subTitle}
                  clickHandler={() => courseHandler(1)}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent='space-around' mb={4}>
              {Object.values(ADDITIONAL_BLOCKS_START_BUSINESS).map((block) => (
                <Grid key={block.id} item xs={11} sm={6} md={6} lg={9} xl={6}>
                  <ProgramButton
                    subTitle={block.title}
                    iconName={block.icon}
                    title='Блок'
                    clickHandler={() => additionalBlockHandler(block)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent='space-around'>
              <Grid item xs={12} xl={10}>
                <ProgramButton
                  iconName={EXIST_BUSINESS_COURSE.icon}
                  title={EXIST_BUSINESS_COURSE.title}
                  subTitle={EXIST_BUSINESS_COURSE.subTitle}
                  clickHandler={() => courseHandler(2)}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent='space-around' mb={4}>
              {Object.values(ADDITIONAL_BLOCKS_EXIST_BUSINESS).map((block) => (
                <Grid key={block.id} item xs={11} sm={6} md={6} lg={9} xl={6}>
                  <ProgramButton
                    subTitle={block.title}
                    iconName={block.icon}
                    title='Блок'
                    clickHandler={() => additionalBlockHandler(block)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid container my={3}>
          <Grid item xs={12} md={3} lg={4} />
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              textAlign: 'center',
              my: { xs: 3, md: 2, lg: 0 }
            }}
          >
            <Contacts modalHandler={submitApp} />
          </Grid>
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

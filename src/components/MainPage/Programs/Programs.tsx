import React, { useCallback, useState } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Modal } from '@src/components';
import { imagesUrls } from '@src/constants';
import { coursesModal } from '@src/content';

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

const additionalBlocksSB: IAdditionalBlock[] = [
  {
    id: 'course-1/additional-block-1',
    title: 'Идея и анализ',
    price: 80,
    icon: 'bulb',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Всё начинается с идеи. В этом блоке вы пройдете самый творческий и
        приятный этап открытия бизнеса. Создадите <strong>идею</strong>,
        сформулируете <strong>концепцию, цель</strong> и
        <strong> ценность</strong>. Определите свою{' '}
        <strong>уникальность</strong>. И как настоящий, начинающий,
        предприниматель по всем законам бизнеса проведете{' '}
        <strong>анализ целевой аудитории</strong> и
        <strong> анализ конкурентов</strong>. Без которых выходить на рынок
        будет грубой ошибкой.
      </Typography>
    )
  },
  {
    id: 'course-1/additional-block-2',
    title: 'Разработка меню',
    price: 60,
    icon: 'menuBook',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Меню должно быть вкусным, красивым, продаваемым, а так же правильно
        технически составленным. В этом блоке вы узнаете как составить
        <strong> ТТК карты</strong>, как <strong>сформировать цену </strong>
        продута, что такое <strong>себестоимость</strong> и
        <strong> средний чек</strong> и оформите{' '}
        <strong>вкусный визуал </strong>
        своего меню.
      </Typography>
    )
  },
  {
    id: 'course-1/additional-block-3',
    title: 'Открытие фирмы и пакет документов',
    price: 130,
    icon: 'paper',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Открывая свой бизнес, не удаться избежать бюрократических вопросов.
        Самый популярный вопрос «Как открыть свою фирму и какой пакет документов
        необходим для открытия»? В этом блоке, вы получите подробную информацию
        о том,{' '}
        <strong>
          какие этапы открытия фирмы, виды налогообложения, пакет документов и
          шаблоны
        </strong>{' '}
        для открытия гастробизнеса под ключ вам понадобятся.
      </Typography>
    )
  },
  {
    id: 'course-1/additional-block-4',
    title: 'Помещение и локация',
    price: 100,
    icon: 'home',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Успех вашего заведения напрямую зависит от местонахождения, то есть
        локации. В этом блоке, мы подробно расскажем, как{' '}
        <strong>выбирать локации</strong>, какие{' '}
        <strong>виды помещений бывают</strong>, на какие{' '}
        <strong>технические требования</strong> обязательно обращать внимание,
        чтобы избежать дополнительных затрат. А так же, покажем примеры,{' '}
        <strong>как бюджетно оформить стильный и модный интерьер</strong>.
      </Typography>
    )
  }
];
const additionalBlocksEB: IAdditionalBlock[] = [
  {
    id: 'course-2/additional-block-1',
    title: 'Финансовая грамотность',
    price: 120,
    icon: 'finance',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Основа любого бизнеса, <strong>это цифры</strong>. В этом блоке, вы
        научитесь <strong>контролировать</strong> и{' '}
        <strong>анализировать цифры</strong>, получите все необходимые{' '}
        <strong>шаблоны и таблицы</strong> для простого ведения финансового
        учета в гастрономии.
      </Typography>
    )
  },
  {
    id: 'course-2/additional-block-2',
    title: 'Маркетинг',
    price: 140,
    icon: 'megaphone',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        В наше время ни один бизнес не может существовать без грамотной
        <strong> маркетинговой стратегии</strong>. В этом блоке, мы дадим вам
        все современные инструменты для <strong>продвижения</strong> и
        <strong> развития</strong> своего гастробизнеса.
      </Typography>
    )
  },
  {
    id: 'course-2/additional-block-3',
    title: 'Продажи и сервис',
    price: 100,
    icon: 'customerService',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        <strong>Уровень сервиса</strong> напрямую влияет на прибыль заведения. В
        этом блоке мы расскажем,{' '}
        <strong>как работать с командой, повышать лояльность</strong> и{' '}
        <strong>возвращаемость клиента</strong>, а так же{' '}
        <strong>увеличивать средний чек</strong>.
      </Typography>
    )
  }
];
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
                  iconName={coursesModal[0].icon}
                  title={coursesModal[0].title}
                  subTitle={coursesModal[0].subTitle}
                  clickHandler={() => courseHandler(1)}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent='space-around' mb={4}>
              {additionalBlocksSB.map((block) => (
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
                  iconName={coursesModal[1].icon}
                  title={coursesModal[1].title}
                  subTitle={coursesModal[1].subTitle}
                  clickHandler={() => courseHandler(2)}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent='space-around' mb={4}>
              {additionalBlocksEB.map((block) => (
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

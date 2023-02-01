import React, { useCallback, useState } from 'react';
import {
  Box,
  FormControl,
  Grid,
  ListSubheader,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { legalMenu } from '@src/constants';

import { LegalBlock } from 'blocks';

const { MenuButton, Menu } = LegalBlock;

const Legal = () => {
  const [currentPoint, setCurrentPoint] = useState<number>(0);

  const pointHandler = useCallback(
    (idx: number) => () => setCurrentPoint(idx),
    []
  );

  const renderMenuItem = (): JSX.Element | null => {
    switch (currentPoint) {
      case 0:
        return (
          <Box>
            <Typography variant='h3' mb={1}>
              {legalMenu[currentPoint]}
            </Typography>
            <Typography variant='body1' mb={1} py={1}>
              Продолжая использовать сайт, Вы даете ИП Афанасьевой Александре
              Глебовне (ИНН 510904614237), согласие на обработку файлов cookies
              и пользовательских данных (дата и время посещения; IP-адрес,
              присвоенный Вашему устройству для выхода в Интернет; тип Вашего
              браузера и операционной системы; данные, собираемые посредством
              агрегаторов статистики посетителей веб-сайтов) в целях ведения
              статистики посещений сайта, составление профиля. Если Вы не
              хотите, чтобы Ваши вышеперечисленные данные обрабатывались, просим
              отключить обработку файлов cookies и сбор пользовательских данных
              в настройках Вашего браузера или покинуть сайт.
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant='h3' mb={1}>
              {legalMenu[currentPoint]}
            </Typography>
            <Typography variant='body1' mb={1} py={1}>
              Если вы начали пропускать занятия или не успеваете учиться по
              выбранной программе, напишите в поддержку: support@netology.ru,
              чтобы мы предложили решение. Например, мы можем перевести вас на
              другой курс или приостановить обучение. Если предложенные варианты
              не подойдут, то возврат денежных средств можно сделать по этим
              правилам.
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Grid
      container
      sx={{
        my: { xs: 2, md: 4 },
        px: { xs: 1, md: 5 }
      }}
    >
      <Grid item xs={12} md={4} sx={{ px: { xs: 1, md: 3 } }}>
        <Typography
          variant='h2'
          sx={{ mb: 3, borderBottom: '1px solid grey', paddingBottom: '16px' }}
        >
          Правовая информация
        </Typography>

        <Menu>
          <Box className='desktop'>
            <Typography variant='h5' mb={1} py={1}>
              ОБЩИЕ УСЛОВИЯ
            </Typography>
            {legalMenu.map((point, index) => (
              <MenuButton
                key={point}
                onClick={pointHandler(index)}
                variant='text'
              >
                {point}
              </MenuButton>
            ))}
          </Box>
          <Box className='mobile'>
            <FormControl sx={{ width: '100%' }}>
              <Select fullWidth defaultValue={currentPoint} id='grouped-select'>
                <ListSubheader>ОБЩИЕ УСЛОВИЯ</ListSubheader>
                {legalMenu.map((point, index) => (
                  <MenuItem
                    key={point}
                    onClick={pointHandler(index)}
                    value={index}
                  >
                    {point}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Menu>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          px: { xs: 1, md: 4 },
          mt: { xs: 4, md: 0 }
        }}
      >
        {renderMenuItem()}
      </Grid>
    </Grid>
  );
};

export default Legal;

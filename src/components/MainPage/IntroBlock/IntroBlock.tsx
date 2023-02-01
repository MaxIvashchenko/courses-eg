import { Box, Button, Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components/Common';

const Typography = styled(MuiTypography)(({ theme }) => ({
  span: {
    color: theme.palette.secondary.main
  }
}));

const IntroBlock = () => (
  <Box
    sx={{
      minHeight: 650,
      background: 'rgba(36,36,36,0.7)',
      width: '100%',
      px: { xs: 4, sm: 8 },
      py: { xs: 2, sm: 4 }
    }}
  >
    <IconComponent name='logo' fill='white' width={220} height={128} />
    <Typography color='common.white' py={1} variant='h1'>
      Онлайн-курс
    </Typography>
    <Typography color='primary.main' variant='h1'>
      Гастробизнес под ключ в Польше
    </Typography>
    <Typography color='common.white' sx={{ pt: 3 }} variant='h3'>
      Открой свою КОФЕЙНЮ, ПЕКАРНЮ или КОНДИТЕРСКУЮ
    </Typography>
    <Typography color='common.white' sx={{ pb: 3 }} variant='h3'>
      <span>зарабатывай от 500 тыс. уже через 3 месяца</span> после старта
    </Typography>
    <Typography color='common.white' sx={{ py: 3 }} variant='h3'>
      Авторский курс Пирожка Вишневого
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', sm: 400 }
      }}
    >
      <Button size='large' variant='contained' sx={{ my: 1 }}>
        Да, я хочу на курс!
      </Button>
      <Button size='large' variant='contained' sx={{ my: 1 }}>
        Подробнее о курсе
      </Button>
    </Box>
  </Box>
);

export default IntroBlock;

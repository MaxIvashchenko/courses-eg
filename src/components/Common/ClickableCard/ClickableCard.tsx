import Image from 'next/image';
import { Box, Card, CardContent, Typography } from '@mui/material';

import { Profile as ProfileBlock } from 'blocks';
import { IconComponent } from '..';

const { CardActionArea, IconWrapper } = ProfileBlock;

interface ClickableCardProps {
  id: string;
  title: string;
  img?: string;
  subTitle?: string;
  clickHandler?: (id: string) => () => void;
}

const ClickableCard = ({
  id,
  title,
  img,
  subTitle,
  clickHandler = () => () => {}
}: ClickableCardProps) => (
  <Card
    sx={{
      boxShadow: '0 6px 20px rgb(0 0 0 / 10%)'
    }}
  >
    <CardActionArea onClick={clickHandler(id)}>
      {img ? (
        <Image src={img} width='160' height='160' alt='cover' />
      ) : (
        <IconWrapper>
          <IconComponent fill='#fff' name='image' />
        </IconWrapper>
      )}
      <Box
        sx={{
          p: { xs: 1, md: 3 },
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography sx={{ mb: 1 }} component='div'>
            {subTitle}
          </Typography>
          <Typography component='div' variant='h3'>
            {title}
          </Typography>
        </CardContent>
      </Box>
    </CardActionArea>
  </Card>
);

export default ClickableCard;

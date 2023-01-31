import { Box, Card, CardContent, Typography } from '@mui/material';
import { Profile as ProfileBlock } from 'blocks';
import { IconComponent } from '..';

const { CardActionArea, IconWrapper } = ProfileBlock;

interface ClickableCardProps {
  id: string;
  icon: string;
  title: string;
  clickHandler: (id: string) => () => void;
}

const ClickableCard = ({
  id,
  icon,
  title,
  clickHandler
}: ClickableCardProps) => (
  <Card
    sx={{
      boxShadow: '0 6px 20px rgb(0 0 0 / 10%)'
    }}
  >
    <CardActionArea onClick={clickHandler(id)}>
      <IconWrapper>
        <IconComponent name={icon} />
      </IconWrapper>
      <Box
        sx={{
          p: { xs: 1, md: 3 },
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h3'>
            {title}
          </Typography>
        </CardContent>
      </Box>
    </CardActionArea>
  </Card>
);

export default ClickableCard;

import { ElementType } from 'react';

import arrow from 'public/icons/arrow.svg';
import cafe from 'public/icons/cafe.svg';
import close from 'public/icons/close.svg';
import cube from 'public/icons/cube.svg';
import downArrow from 'public/icons/down-arrow.svg';
import facebook from 'public/icons/facebook.svg';
import image from 'public/icons/image.svg';
import instagram from 'public/icons/instagram.svg';
import loop from 'public/icons/loop.svg';
import man from 'public/icons/man.svg';
import marketing from 'public/icons/marketing.svg';
import menu from 'public/icons/menu.svg';
import notVisible from 'public/icons/notVisible.svg';
import planning from 'public/icons/planning.svg';
import restaurant from 'public/icons/restaurant.svg';
import salon from 'public/icons/salon.svg';
import scaleup from 'public/icons/scaleup.svg';
import shuttle from 'public/icons/shuttle.svg';
import stats from 'public/icons/stats.svg';
import suitcase from 'public/icons/suitcase.svg';
import telegram from 'public/icons/telegram.svg';
import telephone from 'public/icons/telephone.svg';
import triangle from 'public/icons/triangle.svg';
import visible from 'public/icons/visible.svg';
import youtube from 'public/icons/youtube.svg';
import logo from 'public/logo.svg';

type IconTypes = {
  [key: string]: ElementType;
};

const iconTypes: IconTypes = {
  logo,
  cube,
  stats,
  planning,
  scaleup,
  marketing,
  arrow,
  telegram,
  facebook,
  telephone,
  close,
  visible,
  notVisible,
  salon,
  restaurant,
  image,
  triangle,
  downArrow,
  man,
  cafe,
  loop,
  shuttle,
  suitcase,
  youtube,
  instagram,
  menu
};

type IconComponentProps = {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
};

const IconComponent = ({
  name,
  width = 24,
  height = 24,
  fill
}: IconComponentProps) => {
  const Icon = iconTypes[name];
  return <Icon fill={fill} width={width} height={height} />;
};

export default IconComponent;

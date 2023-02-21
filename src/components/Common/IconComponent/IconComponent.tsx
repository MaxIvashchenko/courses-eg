import { ElementType } from 'react';

import arrow from 'public/icons/arrow.svg';
import close from 'public/icons/close.svg';
import cube from 'public/icons/cube.svg';
import downArrow from 'public/icons/down-arrow.svg';
import facebook from 'public/icons/facebook.svg';
import image from 'public/icons/image.svg';
import marketing from 'public/icons/marketing.svg';
import notVisible from 'public/icons/notVisible.svg';
import planning from 'public/icons/planning.svg';
import restaurant from 'public/icons/restaurant.svg';
import salon from 'public/icons/salon.svg';
import scaleup from 'public/icons/scaleup.svg';
import stats from 'public/icons/stats.svg';
import telegram from 'public/icons/telegram.svg';
import telephone from 'public/icons/telephone.svg';
import triangle from 'public/icons/triangle.svg';
import visible from 'public/icons/visible.svg';
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
  downArrow
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

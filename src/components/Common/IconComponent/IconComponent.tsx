import { ElementType } from 'react';

import logo from 'public/logo.svg';
import cube from 'public/icons/cube.svg';
import stats from 'public/icons/stats.svg';
import planning from 'public/icons/planning.svg';
import marketing from 'public/icons/marketing.svg';
import scaleup from 'public/icons/scaleup.svg';
import arrow from 'public/icons/arrow.svg';

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
  arrow
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

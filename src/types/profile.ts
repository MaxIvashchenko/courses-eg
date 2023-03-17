import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface IAdditionalBlock {
  id: string;
  title: string;
  price: number;
  icon: string;
  buttonBackground: string;
  type: string;
  description: ReactJSXElement;
}

export interface IBlock {
  id: string;
  title: string;
  subBlocks: (string | string[])[];
}

export interface ICourse {
  id: string;
  icon: string;
  title: string;
  subTitle: string;
  type: string;
  blocks: {
    [key: string]: IBlock;
  };
}

export interface IAppPrograms {
  [key: string]: IAdditionalBlock | ICourse;
}

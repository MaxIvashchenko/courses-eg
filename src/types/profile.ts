import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface ILesson {
  id: string;
  name: string;
  program: string;
  block: string;
  type: 'file' | 'video' | 'text';
  subparagraphs?: string[];
}

export interface IAdditionalBlock {
  id: string;
  program: string;
  title: string;
  price: number;
  icon: string;
  buttonBackground: string;
  type: string;
  cover: string;
  description: ReactJSXElement;
  lessons: {
    [key: string]: ILesson;
  };
}

export interface IBlock {
  id: string;
  title: string;
  program: string;
  lessons: {
    [key: string]: ILesson;
  };
}

export interface ICourse {
  id: string;
  icon: string;
  title: string;
  subTitle: string;
  type: string;
  cover: string;
  blocks: {
    [key: string]: IBlock;
  };
}

export interface IAppPrograms {
  [key: string]: IAdditionalBlock | ICourse;
}

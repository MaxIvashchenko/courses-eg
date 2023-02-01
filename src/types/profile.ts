export interface IModuleRow {
  id: string;
  title: string;
  icon: string;
  list: IBlock[];
}

export interface ICourses {
  id: string;
  title: string;
  img?: string;
  list: IModuleRow[];
}

export interface IBlockTheme {
  id: string;
  title: string;
  videoLink: string;
  description: string[];
}

export interface IBlock {
  id: string;
  title: string;
  img?: string;
  themes: IBlockTheme[];
}

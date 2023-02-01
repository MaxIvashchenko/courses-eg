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
}

export interface IBlock {
  id: string;
  title: string;
  img?: string;
  themes: {
    id: string;
    title: string;
    videoLink: string;
    description: string[];
  }[];
}

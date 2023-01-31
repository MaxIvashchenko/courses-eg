interface IModuleRow {
  id: string;
  title: string;
  icon: string;
}

const modulesList: IModuleRow[] = [
  {
    id: 'gastro-module-1',
    title: 'От плана А до точки B',
    icon: 'cube'
  },
  {
    id: 'gastro-module-2',
    title: 'Module 2',
    icon: 'cube'
  },
  {
    id: 'gastro-module-3',
    title: 'Module 3',
    icon: 'cube'
  },
  {
    id: 'gastro-module-4',
    title: 'Module 4',
    icon: 'cube'
  }
];

export default modulesList;

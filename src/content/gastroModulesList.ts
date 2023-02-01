import { IModuleRow } from '@src/types';

import module1 from './module1';

const gastroModulesList: IModuleRow[] = [
  {
    id: 'gastro-module-1',
    title: 'От плана А до точки B',
    icon: 'cube',
    list: module1
  },
  {
    id: 'gastro-module-2',
    title: 'Module 2',
    icon: 'cube',
    list: []
  },
  {
    id: 'gastro-module-3',
    title: 'Module 3',
    icon: 'cube',
    list: []
  },
  {
    id: 'gastro-module-4',
    title: 'Module 4',
    icon: 'cube',
    list: []
  }
];

export default gastroModulesList;

import speaker1 from 'public/images/speakers/speaker1.jpg';
import speaker2 from 'public/images/speakers/speaker2.jpg';
import speaker3 from 'public/images/speakers/speaker3.jpg';
import speaker4 from 'public/images/speakers/speaker4.jpg';
import speaker5 from 'public/images/speakers/speaker5.jpg';
import speaker6 from 'public/images/speakers/speaker6.jpg';

type ISpeaker = {
  id: string;
  photo: string;
  name: string;
  description: string[];
};

const speakersList: ISpeaker[] = [
  {
    id: 'speaker-1',
    photo: speaker1.src,
    name: 'Иващенко Милена',
    description: [
      'В лидирующей компании на рынке Ed Tech выросла с менеджера до директора коммерческого центра',
      'Эксперт по продажам и развитию бизнеса',
      'Более 7 лет опыта в управлении',
      'Упаковала и масштабировала более 10 проектов'
    ]
  },
  {
    id: 'speaker-2',
    photo: speaker2.src,
    name: ' Ястремский Владислав',
    description: [
      'Помогаю предпринимателям с менеджментом, маркетингом и финансами',
      'В управлении 15 лет. Максимальный штат в подчинении - 30 человек',
      'Успешно выстраивал финучёт в агентствах, гастробизнесе и компаниях из сферы услуг'
    ]
  },
  {
    id: 'speaker-3',
    photo: speaker3.src,
    name: 'Taras Shevchenko',
    description: []
  },
  {
    id: 'speaker-4',
    photo: speaker4.src,
    name: 'Marilyn Monroe',
    description: []
  },
  {
    id: 'speaker-5',
    photo: speaker5.src,
    name: 'Winston Churchill',
    description: []
  },
  {
    id: 'speaker-6',
    photo: speaker6.src,
    name: 'Arsène Wenger',
    description: []
  }
];

export default speakersList;

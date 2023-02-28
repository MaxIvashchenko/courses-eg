import speaker1 from 'public/images/speakers/speaker1.jpg';
import speaker2 from 'public/images/speakers/speaker2.jpg';
import speaker3 from 'public/images/speakers/speaker3.jpg';
import speaker5 from 'public/images/speakers/speaker4.jpg';
import speaker4 from 'public/images/speakers/speaker5.jpg';
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
    name: 'Милена Иващенко',
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
    name: 'Владислав Ястремский',
    description: [
      'Помогаю предпринимателям с менеджментом, маркетингом и финансами',
      'В управлении 15 лет. Максимальный штат в подчинении - 30 человек',
      'Успешно выстраивал финучёт в агентствах, гастробизнесе и компаниях из сферы услуг'
    ]
  },
  {
    id: 'speaker-3',
    photo: speaker3.src,
    name: 'Александра Сепсяк',
    description: [
      'Предприниматель. Создатель и управляющая ресторана итальянский кухни PLAN A в Гданьске',
      'Автор и спикер курса «Гастробизнес под ключ в Польше»',
      'Организатор социально-культурных мероприятий для иммигрантов'
    ]
  },
  {
    id: 'speaker-4',
    photo: speaker4.src,
    name: 'Ольга Жбанкова',
    description: [
      'Специалист по легализации и трудоустройству в Польше',
      'Консультант по открытию бизнеса',
      'Блогер'
    ]
  },
  {
    id: 'speaker-5',
    photo: speaker5.src,
    name: 'Анастасия Свистунова',
    description: [
      'Специалист по разработке ТТК и закупкам',
      'Опыт в общепите более 5 лет'
    ]
  },
  {
    id: 'speaker-6',
    photo: speaker6.src,
    name: 'Антон Сепсяк',
    description: [
      'Создатель и шеф-повар ресторана итальянской кухни PLAN A в Гданьске',
      '8 лет опыта в гастрономии. Прошел весь путь от помощника до шефа',
      'Моя фишка в разработке неповторимого авторского меню'
    ]
  }
];

export default speakersList;

import speaker6 from 'public/speakers/arsen-wenger.jpeg';
import speaker2 from 'public/speakers/bogdana-hmelnickogo.jpeg';
import speaker7 from 'public/speakers/margaret-thatcher.jpeg';
import speaker4 from 'public/speakers/marilyn-monroe.jpeg';
import speaker1 from 'public/speakers/MonaLisa.jpeg';
import speaker8 from 'public/speakers/nelson-mandela.jpeg';
import speaker9 from 'public/speakers/nikolai_2.webp';
import speaker3 from 'public/speakers/taras-shechenko.jpeg';
import speaker5 from 'public/speakers/winsto-churchill.jpeg';

type ISpeaker = {
  id: string;
  photo: string;
  name: string;
  description: string;
};

const speakersList: ISpeaker[] = [
  {
    id: 'speaker-1',
    photo: speaker1.src,
    name: 'Mona Lisa',
    description: ''
  },
  {
    id: 'speaker-2',
    photo: speaker2.src,
    name: 'Bogdana Hmelnickogo',
    description: ''
  },
  {
    id: 'speaker-3',
    photo: speaker3.src,
    name: 'Taras Shevchenko',
    description: ''
  },
  {
    id: 'speaker-4',
    photo: speaker4.src,
    name: 'Marilyn Monroe',
    description: ''
  },
  {
    id: 'speaker-5',
    photo: speaker5.src,
    name: 'Winston Churchill',
    description: ''
  },
  {
    id: 'speaker-6',
    photo: speaker6.src,
    name: 'Arsène Wenger',
    description: ''
  },
  {
    id: 'speaker-7',
    photo: speaker7.src,
    name: 'Margaret Thatcher',
    description: ''
  },
  {
    id: 'speaker-8',
    photo: speaker8.src,
    name: 'Нельсон Мандела',
    description: ''
  },
  {
    id: 'speaker-9',
    photo: speaker9.src,
    name: 'Никола́й II Алекса́ндрович',
    description: ''
  }
];

export default speakersList;

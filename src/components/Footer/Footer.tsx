import { email, phoneNumber } from '@src/constants';

import { Footer as FooterBlocks } from 'blocks';
import { IconComponent } from '../Common';

const { FooterWrapper, IconButton } = FooterBlocks;

const footerContent: { name: string; onClick: () => void }[] = [
  {
    name: 'youtube',
    onClick: () => {}
  },
  {
    name: 'instagram',
    onClick: () => {}
  },
  {
    name: 'telegram',
    onClick: () => window.open('https://t.me/+dos73xV2vQExMmNk')
  },
  {
    name: 'telephone',
    onClick: () => window.open(`tel:${phoneNumber}`)
  },
  {
    name: 'email',
    onClick: () => window.open(`mailto:${email}`)
  }
];

const Footer = () => (
  <FooterWrapper component='footer'>
    {footerContent.map(({ name, onClick }) => (
      <IconButton key={name} onClick={onClick}>
        <IconComponent fill='#fff' name={name} />
      </IconButton>
    ))}
  </FooterWrapper>
);

export default Footer;

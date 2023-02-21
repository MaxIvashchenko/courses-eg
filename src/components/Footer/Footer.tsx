import { Footer as FooterBlocks } from 'blocks';
import { IconComponent } from '../Common';

const { FooterWrapper, IconButton } = FooterBlocks;

const footerContent: { name: string; link: string }[] = [
  {
    name: 'facebook',
    link: ''
  },
  {
    name: 'telegram',
    link: ''
  }
];

const Footer = () => (
  <FooterWrapper component='footer'>
    {footerContent.map(({ name }) => (
      <IconButton key={name}>
        <IconComponent fill='#fff' name={name} />
      </IconButton>
    ))}
  </FooterWrapper>
);

export default Footer;

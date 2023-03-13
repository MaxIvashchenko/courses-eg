import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { email, paths, phoneNumber } from '@src/constants';
import {
  redirectToEmail,
  redirectToInstagram,
  redirectToPhone,
  redirectToTelegramChannel,
  redirectToYoutube
} from '@src/utils';

import { Footer as FooterBlocks } from 'blocks';
import { IconComponent } from '../Common';

const { FooterWrapper, IconButton } = FooterBlocks;

const footerContent: { name: string; onClick: () => void }[] = [
  {
    name: 'youtube',
    onClick: redirectToYoutube
  },
  {
    name: 'instagram',
    onClick: redirectToInstagram
  },
  {
    name: 'telegram',
    onClick: redirectToTelegramChannel
  },
  {
    name: 'telephone',
    onClick: redirectToPhone
  },
  {
    name: 'email',
    onClick: redirectToEmail
  }
];

const Footer = () => {
  const router = useRouter();

  const hideFooter =
    router.route === paths.signIn ||
    router.route === paths.verifyRequest ||
    router.route === paths.authError;

  if (hideFooter) return <></>;

  return (
    <FooterWrapper component='footer'>
      {footerContent.map(({ name, onClick }) => (
        <IconButton key={name} onClick={onClick}>
          <IconComponent fill='#fff' name={name} />
          {name === 'telephone' && (
            <Typography color='#fff' ml={2}>
              {phoneNumber}
            </Typography>
          )}
          {name === 'email' && (
            <Typography color='#fff' ml={2}>
              {email}
            </Typography>
          )}
        </IconButton>
      ))}
    </FooterWrapper>
  );
};

export default Footer;

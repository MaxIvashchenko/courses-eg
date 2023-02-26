import {
  email,
  instagram,
  phoneNumber,
  telegramChannel,
  telegramPrivateLink,
  youtube
} from '@src/constants';

export const redirectToYoutube = () => window.open(youtube);
export const redirectToInstagram = () => window.open(instagram);
export const redirectToTelegramChannel = () => window.open(telegramChannel);
export const redirectToPhone = () => window.open(`tel:${phoneNumber}`);
export const redirectToEmail = () => window.open(`mailto:${email}`);
export const redirectToTelegramPrivateLink = () =>
  window.open(telegramPrivateLink);

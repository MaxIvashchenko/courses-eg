const token = process.env.TELEGRAM_TOKEN;

export const getTelegramURL = () =>
  `https://api.telegram.org/bot${token}/sendMessage`;

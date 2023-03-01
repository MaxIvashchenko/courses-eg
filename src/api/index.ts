import { IRequestFormState } from '@src/types';
import { getTelegramURL } from '@src/utils';
import axios from 'axios';

const url = getTelegramURL();

const getMessageTemplate = ({
  name,
  email,
  phone,
  message
}: IRequestFormState) => `
<b>Заявка с сайта business-emigrant</b>
<b>Имя: ${name}</b>
<b>Имейл: ${email}</b>
<b>Номер телефона: ${phone || '-'}</b>
<b>Сообщение: ${message || 'Сообщения нет'}</b>
`;

export const sendRequest = async (values: IRequestFormState) =>
  axios.post(url, {
    chat_id: process.env.TELEGRAM_CHAD_ID,
    parse_mode: 'html',
    text: getMessageTemplate(values)
  });

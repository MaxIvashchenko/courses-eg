import { getHTML, getText } from '@src/utils';
import { createTransport } from 'nodemailer';

interface IParams {
  identifier: string;
  url: string;
  provider: any;
}

const CustomsendVerificationRequest = async (params: IParams) => {
  const { identifier, url, provider } = params;
  const { host } = new URL(url);
  // NOTE: You are not required to use `nodemailer`, use whatever you want.
  const transport = createTransport(provider.server);
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Вход в ${host}`,
    text: getText({ url, host }),
    html: getHTML({ url })
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
  }
};

export default CustomsendVerificationRequest;

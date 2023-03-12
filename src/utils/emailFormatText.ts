export const getHTML = (params: { url: string }) => {
  const { url } = params;

  const color = {
    background: '#f5f7f8',
    text: '#444',
    buttonBackground: '#69381e',
    buttonBorder: '#69381e',
    buttonText: '#fff'
  };

  return `
  <body style="background: ${color.background};">
    <table width="100%" border="0" cellspacing="20" cellpadding="0 style="padding: 60px"
      style="max-width: 600px; margin: 40px; border-radius: 10px;">
      <tr>
        <td align="center"
          style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Войти в <strong>business-emigrant.com</strong>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                  target="_blank"
                  style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; 
                  color: ${color.buttonText}; text-decoration: none; border-radius: 5px; 
                  padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; 
                  font-weight: bold;">Войти
                  </a></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center"
          style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, 
          sans-serif; color: ${color.text};">
          Если вы не запрашивали это письмо, 
          <br>
          вы можете спокойно его игнорировать.
        </td>
      </tr>
    </table>
  </body>
  `;
};

export const getText = ({ url, host }: { url: string; host: string }) =>
  `Войти ${host}\n${url}\n\n`;

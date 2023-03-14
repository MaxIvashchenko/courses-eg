import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContactButtons = styled(Button)<{ background: string }>(
  ({ theme, background }) => ({
    background,
    minWidth: 350,
    margin: '8px 0',
    textTransform: 'uppercase',

    [theme.breakpoints.down('md')]: {
      minWidth: 400
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 310
    }
  })
);

interface ContactsProps {
  modalHandler: () => void;
}

const Contacts = ({ modalHandler }: ContactsProps) => (
  <ContactButtons onClick={modalHandler} background='#524a49'>
    Оставить заявку
  </ContactButtons>
);

export default Contacts;

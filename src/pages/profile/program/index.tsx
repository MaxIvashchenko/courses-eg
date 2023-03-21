import { Box } from '@mui/material';
import { paths } from '@src/constants';

const ProgramPage = () => <Box />;

export async function getServerSideProps() {
  return { redirect: { destination: paths.profile } };
}

export default ProgramPage;

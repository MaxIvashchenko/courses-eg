import { Typography } from '@mui/material';
import { Layout } from '@src/blocks';
import { GetServerSideProps } from 'next';

interface ProgramProps {
  programId: number;
}

const Program = ({ programId }: ProgramProps) => {
  return (
    <Layout.PageContainer>
      <Typography variant='h1' textAlign='center'>
        Program #{programId}
      </Typography>
    </Layout.PageContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const id = query.id;

  return {
    props: { programId: id }
  };
};

export default Program;

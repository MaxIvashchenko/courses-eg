import { EmptyPageMessage } from '@src/components';
import { GetServerSideProps } from 'next';

const Module = () => {
  return (
    <EmptyPageMessage message='Данного модуля не существует или он не доступен' />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const moduleId = query.id;

  return {
    props: { moduleId }
  };
};

export default Module;

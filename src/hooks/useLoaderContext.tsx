import { useContext } from 'react';
import { LoaderContext } from '@src/context';

const useLoaderContext = () => useContext(LoaderContext);

export default useLoaderContext;

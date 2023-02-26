import type { AppProps } from 'next/app';

import { Layout as LayoutBlocks } from 'blocks';
import { ToTopButton } from '../Common';

const { LayoutWrapper } = LayoutBlocks;

type LayoutProps = Omit<AppProps, 'router'>;

const Layout = ({ Component, pageProps }: LayoutProps) => (
  <LayoutWrapper component='section'>
    <Component {...pageProps} />
    <ToTopButton />
  </LayoutWrapper>
);
export default Layout;

import React from 'react';
import type { AppProps } from 'next/app';

import { Layout as LayoutBlocks } from 'blocks';

const { LayoutWrapper } = LayoutBlocks;

type LayoutProps = Omit<AppProps, 'router'>;

const Layout = ({ Component, pageProps }: LayoutProps) => (
  <LayoutWrapper component='section'>
    <Component {...pageProps} />
  </LayoutWrapper>
);
export default Layout;

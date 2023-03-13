import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { Layout as LayoutBlocks } from 'blocks';
import { Footer, Header, Layout } from 'components';
import theme from '../theme';

const { AppWrapper, ContentWrapper } = LayoutBlocks;

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <>
    <Head>
      <title>Emi Grant</title>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <CssBaseline />
        <AppWrapper component='main'>
          <Header />
          <ContentWrapper>
            <Layout Component={Component} pageProps={pageProps} />
          </ContentWrapper>
          <Footer />
          {/* <CookiesAlert /> */}
        </AppWrapper>
      </SessionProvider>
    </ThemeProvider>
  </>
);

export default App;

import type { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { Layout as LayoutBlocks } from 'blocks';
import { CookiesAlert, Footer, Header, Layout } from 'components';
import theme from '../theme';

const { AppWrapper, ContentWrapper } = LayoutBlocks;

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Ester Candles</title>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppWrapper component='main'>
        <Header />
        <ContentWrapper>
          <Layout Component={Component} pageProps={pageProps} />
        </ContentWrapper>
        <Footer />
        <CookiesAlert />
      </AppWrapper>
    </ThemeProvider>
  </>
);

export default App;

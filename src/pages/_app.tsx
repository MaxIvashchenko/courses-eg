import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout as LayoutBlocks } from 'blocks';
import theme from '../theme';

import type { AppProps } from 'next/app';
import { Header, Layout } from 'components';

const { AppWrapper, ContentWrapper } = LayoutBlocks;

export default function App({ Component, pageProps }: AppProps) {
  return (
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
          {/* <Footer /> */}
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

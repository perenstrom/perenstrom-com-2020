// import { ThemeProvider } from 'styled-components';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    //<ThemeProvider theme={global}>
      <Component {...pageProps} />
    //</ThemeProvider>
  );
}

export default MyApp;

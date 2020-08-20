// import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    //<ThemeProvider theme={global}>
      <Component {...pageProps} />
    //</ThemeProvider>
  );
}

export default MyApp;

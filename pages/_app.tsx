import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return <Component {...pageProps} key={router.asPath} />;
}

export default MyApp;

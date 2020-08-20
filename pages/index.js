import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getHero } from '../lib/api';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Per Enström</title>
      </Head>
      <pre>{JSON.stringify(props.hero, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const hero = await getHero();
  return {
    props: { hero }
  };
}

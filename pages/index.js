import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getHero } from '../lib/api';

// Shared components
import { Hero } from '../components/Hero';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Per Enström</title>
      </Head>
      <Hero
        heading={props.hero.fields.heading}
        image={props.hero.fields.image[0].secure_url}
      />
      <h2>Here is a h2</h2>
      <h3>Here is a h3</h3>
      <h4>Here is a h4</h4>
      <h5>Here is a h5</h5>
      <h6>Here is a h6</h6>
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

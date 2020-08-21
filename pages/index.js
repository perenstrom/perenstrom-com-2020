import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getHero } from '../lib/api';

// Shared components
import { Hero } from '../components/Hero';
import { MasonryImages2 } from '../components/MasonryImages2';

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
      <MasonryImages2 />
      <h2>Here is a h2</h2>
      <h3>Here is a h3</h3>
      <h4>Here is a h4</h4>
      <h5>Here is a h5</h5>
      <h6>Here is a h6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida
        convallis aliquet. Donec sollicitudin lectus a maximus consectetur.
        Quisque vel lacus nec arcu facilisis condimentum. Fusce vel dapibus
        velit. Cras dignissim nisl non neque molestie, eget porta metus
        suscipit. In hac habitasse platea dictumst. Pellentesque non arcu massa.
      </p>
      <p>
        Sed quis commodo metus, eget elementum magna. Proin placerat consequat
        ex, quis convallis lorem. Nulla ullamcorper mi ut maximus rutrum. In
        sagittis tempus tellus non malesuada. Maecenas eu quam arcu. Quisque et
        condimentum nisi. Mauris efficitur, libero ultricies varius interdum,
        urna odio dapibus sem, non tincidunt sem enim sed risus. Nam eleifend,
        dui ac accumsan porta, nibh ligula mattis magna, vitae scelerisque augue
        magna vel sem. Pellentesque ac metus lectus. Pellentesque dictum
        consequat mollis. Ut vel dictum sem.{' '}
      </p>
      {/* <pre>{JSON.stringify(props.hero, null, 2)}</pre> */}
    </div>
  );
}

export async function getStaticProps() {
  const hero = await getHero();
  return {
    props: { hero }
  };
}

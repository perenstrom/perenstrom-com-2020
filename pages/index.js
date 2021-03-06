import React from 'react';
import Head from 'next/head';
import { getHero, getImages } from '../lib/api';

// Shared components
import { Menu } from '../components/Menu';
import { Hero } from '../components/Hero';
import { MasonryImages } from '../components/MasonryImages';
import { Container } from '../components/Container';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Per Enström</title>
      </Head>
      <Hero
        heading={props.hero.fields.heading}
        image={props.hero.fields.image[0]}
      />
      <Menu />
      <Container>
        <MasonryImages images={props.images} />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const hero = await getHero();
  const images = await getImages();

  return {
    props: { hero, images }
  };
}

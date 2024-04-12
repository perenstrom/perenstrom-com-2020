import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { MasonryImages } from '../components/MasonryImages';
import { Menu } from '../components/Menu';
import { getHero, getImages } from '../lib/api';
import { CloudinaryAsset } from '../types/cloudinary';
import { TypeHero } from '../types/generated/contentful';
import { Image } from '../types/types';

interface Props {
  hero: TypeHero<undefined, 'en-US'>;
  images: Image[];
}

const HomePage: NextPage<Props> = (props) => {
  const heroImage = (
    props.hero.fields.image as unknown as CloudinaryAsset[]
  )[0];

  return (
    <div>
      <Head>
        <title>Per Enström</title>
      </Head>
      <Hero image={heroImage} />
      <Menu />
      <Container>
        <MasonryImages images={props.images} />
      </Container>
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const hero = await getHero();
  const images = await getImages();

  return {
    props: { hero, images }
  };
};

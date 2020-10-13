import React from 'react';
import Head from 'next/head';
import { getPage, getPageSlugs } from '../lib/api';
import ReactMarkdown from 'react-markdown';

// Shared components
import { Menu } from '../components/Menu';
// import { Hero } from '../components/Hero';
import { Container } from '../components/Container';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>{props.page.fields.title} | Per Enström</title>
      </Head>
      <Menu />
      <Container>
        <h1>{props.page.fields.title}</h1>
        <ReactMarkdown>{props.page.fields.content}</ReactMarkdown>
      </Container>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const page = await getPage(slug);

  return {
    props: { page }
  };
}

export async function getStaticPaths() {
  const paths = await getPageSlugs();

  return {
    paths: paths,
    fallback: false
  };
}

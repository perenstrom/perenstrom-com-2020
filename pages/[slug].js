import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { getPage, getPageSlugs } from '../lib/api';
import ReactMarkdown from 'react-markdown';

// Shared components
import { Menu } from '../components/Menu';
// import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { isCloudinaryUrl } from '../helpers/cloudinary-helper';
import { ResponsiveImage } from '../components/ResponsiveImage';

const MarkdownContainer = styled.div`
  & img {
    width: 100%;
  }
`;

const ImageRender = (props) => {
  if (isCloudinaryUrl(props.src)) {
    return <ResponsiveImage width={1280} cloudinaryImage={props.src} alt={props.alt} />;
  } else {
    return <img src={props.src} alt={props.alt} />;
  }
};

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>{props.page.fields.title} | Per Enström</title>
      </Head>
      <Menu />
      <Container>
        <h1>{props.page.fields.title}</h1>
        <MarkdownContainer>
          <ReactMarkdown renderers={{ image: ImageRender }}>
            {props.page.fields.content}
          </ReactMarkdown>
        </MarkdownContainer>
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

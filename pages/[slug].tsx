import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { styled } from 'styled-components';
import { Container } from '../components/Container';
import { Menu } from '../components/Menu';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { isCloudinaryUrl } from '../helpers/cloudinary-helper';
import { getPage, getPageSlugs } from '../lib/api';
import { TypeBlogPost } from '../types/generated/contentful';

const MarkdownContainer = styled.div`
  & img {
    width: 100%;
  }
`;

const ImageRender = (props: { src?: string; alt?: string }) => {
  if (isCloudinaryUrl(props.src || '')) {
    return (
      <ResponsiveImage
        width={1280}
        cloudinaryImage={props.src || ''}
        alt={props.alt}
      />
    );
  } else {
    return <img src={props.src || ''} alt={props.alt} />;
  }
};

interface Props {
  page: TypeBlogPost<undefined, 'en'>;
}

export default function Home(props: Props) {
  return (
    <div>
      <Head>
        <title>{props.page.fields.title} | Per Enström</title>
        <meta name="description" content={props.page.fields.metaDescription} />
        <meta
          property="og:description"
          content={props.page.fields.metaDescription}
        />
      </Head>
      <Menu />
      <Container>
        <h1>{props.page.fields.title}</h1>
        <MarkdownContainer>
          <ReactMarkdown components={{ img: ImageRender }}>
            {props.page.fields.content}
          </ReactMarkdown>
        </MarkdownContainer>
      </Container>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params
}) => {
  const page = await getPage(params?.slug as string);

  return {
    props: { page }
  };
};

export async function getStaticPaths() {
  const paths = await getPageSlugs();

  return {
    paths: paths,
    fallback: false
  };
}

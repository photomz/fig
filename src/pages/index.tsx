import React from 'react';
import tw from 'twin.macro';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import { Features, Newsletter } from '../modules/landing-page';
import Layout from '../components/layout';

const Landing = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="FIG" />
      {/* <div tw="text-green-500">
          <h1 tw="text-6xl mb-4 font-black">SongBot</h1>
          <h4 tw="text-lg mb-4 font-light">
            Bringing order to the chaos that is your Spotify library.
          </h4>
          <h5 tw="text-xl">Yes, I&apos;m talking about you.</h5>
          <button type="button">Click me</button>
        </div> */}
      <main className="flex-grow">
        {/*  Page sections */}
        {/* <HeroHome /> */}
        <Features />
        {/* <FeaturesBlocks /> */}
        {/* <Testimonials /> */}
        <Newsletter />
      </main>
    </Layout>
  );
};

export default Landing;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

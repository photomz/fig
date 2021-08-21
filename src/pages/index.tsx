import * as React from 'react';
import tw from 'twin.macro';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="FIG" />
      {posts.length === 0 ? (
        <p>
          No blog posts found. Add markdown posts to &quot;content/blog&quot;
          (or the directory you specified for the
          &quot;gatsby-source-filesystem&quot; plugin in gatsby-config.js).
        </p>
      ) : (
        <ol tw="mt-5 list-none">
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li key={post.fields.slug}>
                <article
                  tw="mx-8"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header tw="mb-4">
                    <h2 tw="mt-8 text-2xl text-green-500 font-black mb-2">
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                      tw="mb-0"
                    />
                  </section>
                </article>
              </li>
            );
          })}
        </ol>
      )}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;

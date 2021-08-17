import * as React from 'react';
import { Link, graphql } from 'gatsby';
import tw from 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {posts.length === 0 ? (
        <p>
          No blog posts found. Add markdown posts to &quot;content/blog&quot;
          (or the directory you specified for the
          &quot;gatsby-source-filesystem&quot; plugin in gatsby-config.js).
        </p>
      ) : (
        <ol style={{ listStyle: `none` }} tw="mt-5">
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2 tw="mt-8">
                      <Link to={post.fields.slug} itemProp="url">
                        <span
                          itemProp="headline"
                          tw="text-green-500 font-black"
                        >
                          {title}
                        </span>
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

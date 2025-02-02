import React from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid, Row, Col } from '@r007/react-styled-flexboxgrid';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import Segmented from '../components/Segmented';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import { Spacing, FirstColumnMobile, SecondColumnMobile } from '../components/common';

const Link = styled(GatsbyLink)`
  display: block;
  color: ${(props) => props.theme.colors.themeDarker};
  :hover {
    text-decoration: none;
  }
`;

const CenteredCol = styled(SecondColumnMobile)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

function Blog({ data, pageContext }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO
        title="News"
        description="Ocius Technology Ltd is building a new network of renewable energy powered uncrewed surface
        vessels and today launched a &#8216;man-portable&#8217; version of the Bluebottle USV. &#8220;We&#8217;ve
        had a number of enquiries for small self sustaining USVs that can be deployed easily from a deck or beach."
      />

      <Grid>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={1} size="huge" weight="thick" underline="left">
              News
            </Heading>
          </Col>
        </Row>
        <section className="page-content">
          <Row>
            <Col className="primary-content" xs={12} md={12} lg={12}>
              {posts.map(({ node }, index) => (
                <Segmented key={node.id} borderBottom>
                  {!(index % 2) ? (
                    <Row className="post">
                      <FirstColumnMobile lg={6} md={6} xs={12}>
                        {node.frontmatter.featuredImage && (
                          <Link to={node.fields.slug}>
                            <GatsbyImage
                              image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                              alt={node.frontmatter.title}
                            />
                          </Link>
                        )}
                        <Spacing $value="0px" $xsValue="20px" />
                      </FirstColumnMobile>
                      <CenteredCol lg={6} md={6} xs={12}>
                        <Heading level={3} size="medium" className="title" weight="thick">
                          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        </Heading>
                        <p className="date">{node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                        <Button color="blue" size="small" href={node.fields.slug}>
                          Read more
                        </Button>
                      </CenteredCol>
                    </Row>
                  ) : (
                    <Row className="post">
                      <CenteredCol lg={6} md={6} xs={12}>
                        <Heading level={3} size="medium" className="title" weight="thick">
                          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        </Heading>
                        <p className="date">{node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                        <Button color="blue" size="small" href={node.fields.slug}>
                          Read more
                        </Button>
                      </CenteredCol>
                      <FirstColumnMobile lg={6} md={6} xs={12}>
                        {node.frontmatter.featuredImage && (
                          <Link to={node.fields.slug}>
                            <GatsbyImage
                              image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                              alt={node.frontmatter.title}
                            />
                          </Link>
                        )}
                        <Spacing $value="0px" $xsValue="20px" />
                      </FirstColumnMobile>
                    </Row>
                  )}
                </Segmented>
              ))}
              <Pagination pageContext={pageContext} pathPrefix="/" />
            </Col>
          </Row>
        </section>
      </Grid>

      <Segmented>
        <NewsletterForm />
      </Segmented>

      <Segmented>
        <ContactUs />
      </Segmented>
    </Layout>
  );
}

export const query = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 700, height: 400, layout: CONSTRAINED)
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`;

export default Blog;

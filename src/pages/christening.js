import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from '@r007/react-styled-flexboxgrid';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import Segmented from '../components/Segmented';
import ResponsiveIframe from '../components/ResponsiveIframe';
import ArticlePreviewBlock from '../components/ArticlePreviewBlock';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import {
  Spacing,
  FirstColumnMobile,
  SecondColumnMobile,
  AccentRowWrapper,
} from '../components/common';

function ChristeningPage({ data }) {
  return (
    <Layout>
      <SEO
        title="Christening"
        description="Christening of Barra and Bombora"
      />

      {data.HeroBackground && (
        <HeroBlock
          image={data.HeroBackground.childImageSharp.gatsbyImageData.images.fallback}
          masked
          scrim="blue"
        >
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Spacing $value="400px" />
              <Heading level={1} color="white" size="huge" weight="thick" underline="left">
                Christening
              </Heading>
              <Heading level={2} color="white" size="medium" weight="normal" as="p">
                Christening of Barra and Bombora
              </Heading>
              <Spacing $value="80px" />
            </Col>
          </Row>
        </HeroBlock>
      )}

      <Grid className="page-content">
        <Row className="centered">
          <Col xs={12} md={8} lg={8} mdOffset={2}>
            <Spacing $value="80px" />
            <Heading level={2} size="large" weight="thick" underline="center">
              Christening
            </Heading>
            <Spacing $value="40px" />
          </Col>
        </Row>
        <Segmented>
          <Row>
            <SecondColumnMobile className="primary-content" xs={12} md={6} lg={5}>
              <p style={{ marginBottom: 40 }}>
                Ocius Pty Ltd will be christening its newest vessels Barra and Bombora at 5:30pm on 24 November 2022,
                at its workshop in R13, on the UNSW Randwick Campus at 22 King St, Randwick.
                If attending in person please arrive by 5:00pm, so that we may start on time.
              </p>

              <header>
                <Heading level={2} size="medium" weight="thick" underline="left">
                  Date
                </Heading>
              </header>

              <p style={{ marginBottom: 40 }}>
                5:30pm, November 24th 2022
              </p>

              <header>
                <Heading level={2} size="medium" weight="thick" underline="left">
                  Location
                </Heading>
              </header>

              <p style={{ marginBottom: 40 }}>
                R13, UNSW Randwick Campus, 22 King St, Randwick.
              </p>
            </SecondColumnMobile>
            <FirstColumnMobile xs={12} md={6} lg={6} lgOffset={1}>
              {data.ChristeningImage && (
                <GatsbyImage
                  image={data.ChristeningImage.childImageSharp.gatsbyImageData}
                  alt="Bonnie is Christened"
                />
              )}
            </FirstColumnMobile>
          </Row>
        </Segmented>
      </Grid>

      <Segmented>
        <Grid>
          <Row className="centered">
            <Col xs={12} md={8} lg={8} mdOffset={2}>
              <Heading level={2} size="large" weight="thick" underline="center">
                Ocius news headlines
              </Heading>
            </Col>
          </Row>
          <ArticlePreviewBlock />
        </Grid>
      </Segmented>

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
  {
    HeroBackground: file(relativePath: { eq: "images/usv-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
    ChristeningImage: file(relativePath: { eq: "images/Bonnie-Christened.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, width: 768, layout: CONSTRAINED)
      }
    }
  }

  fragment constrainedLogotype on File {
    childImageSharp {
      gatsbyImageData(quality: 85, width: 200, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
`;

export default ChristeningPage;

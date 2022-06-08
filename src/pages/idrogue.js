import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from '@r007/react-styled-flexboxgrid';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import Segmented from '../components/Segmented';
import ArticlePreviewBlock from '../components/ArticlePreviewBlock';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import {
  Spacing,
  FirstColumnMobile,
  SecondColumnMobile,
  AccentRowWrapper,
} from '../components/common';

function iDroguePage({ data }) {
  return (
    <Layout>
      <SEO
        title="iDrogue"
        description="Capture and release any AUV, from any platform, in almost any Seastate."
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
                iDrogue
              </Heading>
              <Heading level={2} color="white" size="medium" weight="normal" as="p">
                Capture and release any AUV, from any platform, in almost any Seastate.
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
              Autonomous Recovery System
            </Heading>
            <Spacing $value="40px" />
          </Col>
        </Row>
        <Segmented>
          <Row>
            <SecondColumnMobile className="primary-content" xs={12} md={6} lg={5}>
              <header>
                <Heading level={2} size="medium" weight="thick" underline="left">
                  The iDrogue prototype
                </Heading>
              </header>

              <p style={{ marginBottom: 40 }}>
                iDrouge is a new TASDCRC project lead by Ocius in collaboration with UNSW and AMC to
                develop an autonomous means of capturing and releasing AUVs at calm depth. iDrogue
                is different to previous projects because it puts the intelligence and autonomy on
                the drogue and not making changes to the AUV.
              </p>
            </SecondColumnMobile>
            <FirstColumnMobile xs={12} md={6} lg={6} lgOffset={1}>
              {data.iDrogueImage && (
                <GatsbyImage
                  image={data.iDrogueImage.childImageSharp.gatsbyImageData}
                  alt="The iDrogue prototype"
                />
              )}
            </FirstColumnMobile>
          </Row>
        </Segmented>
      </Grid>

      <AccentRowWrapper>
        <Grid className="page-content">
          <Row className="centered">
            <Col xs={12} md={8} lg={8} mdOffset={2}>
              <Spacing $value="80px" />
              <Heading level={2} size="large" weight="thick" underline="center">
                Partners
              </Heading>
              <Spacing $value="40px" />
            </Col>
          </Row>
          <Segmented>
            <Row style={{ alignItems: 'center' }}>
              <Col xs={12} md={6} lg={3}>
                {data.RoyalAustralianNavy && (
                  <GatsbyImage
                    image={data.RoyalAustralianNavy.childImageSharp.gatsbyImageData}
                    alt="Royal Australian Navy logotype"
                  />
                )}
              </Col>
              <Col xs={12} md={6} lg={3}>
                {data.TAS && (
                  <GatsbyImage
                    image={data.TAS.childImageSharp.gatsbyImageData}
                    alt="Trusted Autonomous Systems"
                  />
                )}
              </Col>
              <Col xs={12} md={6} lg={3}>
                {data.AMC && (
                  <GatsbyImage
                    image={data.AMC.childImageSharp.gatsbyImageData}
                    alt="Australian Maritime College Logotype"
                  />
                )}
              </Col>
              <Col xs={12} md={6} lg={3}>
                {data.UNSW && (
                  <GatsbyImage
                    image={data.UNSW.childImageSharp.gatsbyImageData}
                    alt="UNSW Sydney Logotype"
                  />
                )}
              </Col>
            </Row>
          </Segmented>
        </Grid>
      </AccentRowWrapper>

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
    HeroBackground: file(relativePath: { eq: "images/tentacle-grabbing-AUV.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
    iDrogueImage: file(relativePath: { eq: "images/tank-testing-blurfin-and-idrogue-day-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, width: 768, layout: CONSTRAINED)
      }
    }

    RoyalAustralianNavy: file(relativePath: { eq: "pages/about/images/navy.jpeg" }) {
      ...constrainedLogotype
    }
    UNSW: file(relativePath: { eq: "pages/about/images/UNSW.jpg" }) {
      ...constrainedLogotype
    }
    AMC: file(relativePath: { eq: "pages/about/images/AMC-logo.jpg" }) {
      ...constrainedLogotype
    }
    TAS: file(relativePath: { eq: "pages/about/images/TAS-logo.png" }) {
      ...constrainedLogotype
    }
  }

  fragment constrainedLogotype on File {
    childImageSharp {
      gatsbyImageData(quality: 85, width: 200, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
`;

export default iDroguePage;

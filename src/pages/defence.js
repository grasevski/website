import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from '@r007/react-styled-flexboxgrid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import OciusGlobeAlt from '../components/Icons/OciusGlobeAlt';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import Segmented from '../components/Segmented';
import ArticlePreviewBlock from '../components/ArticlePreviewBlock';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import { Spacing } from '../components/common';

function DefencePage({ data }) {
  return (
    <Layout>
      <SEO
        title="Defence"
        description="Persistent Uncrewed Surface Vessels (USVs) are being seen as strategic in Defence as force multipliers Bluebottles have more
       power payload and performance making them the superior persistent USV for defence"
      />

      {data.HeroBackground && (
        <HeroBlock
          image={data.HeroBackground.childImageSharp.gatsbyImageData.images.fallback}
          masked
          scrim="blue"
        >
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Spacing $value="280px" />
              <Heading level={1} color="white" size="huge" weight="thick" underline="left">
                Defence
              </Heading>
              <Heading level={2} color="white" size="medium" weight="normal" as="p">
                Persistent USVs are seen by Defence as strategic force multipliers. Bluebottles have
                more power, payload and performance making them the superior persistent USV for
                Defence.
              </Heading>
              <Spacing $value="80px" />
            </Col>
          </Row>
        </HeroBlock>
      )}

      <Grid>
        <Segmented>
          <Row className="centered">
            <Col xs={12} md={8} lg={8} mdOffset={2}>
              <Spacing $value="80px" />
              <Heading level={2} size="large" weight="thick" underline="center">
                Ocius key defence features
              </Heading>
            </Col>
          </Row>
        </Segmented>
        <Segmented>
          <Row>
            <Col xs={12} md={4} lg={4}>
              <OciusGlobeAlt
                fill="#4db4e6"
                style={{
                  height: '120px',
                  marginBottom: '10px',
                  width: 'auto',
                }}
              />
              <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
                Anti-Submarine Warfare
              </Heading>
              <ul className="left-align">
                <li>Silent operation</li>
                <li>“Reel in keel“ winch</li>
                <li>50W average / kW bursts</li>
                <li>Active &amp; passive arrays</li>
                <li>Depth via speed &amp; winch</li>
                <li>Speed to resolve L-R ambiguity</li>
                <li>Network &amp; collaborate with other Bluebottles &amp; other assets</li>
              </ul>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <OciusGlobeAlt
                fill="#4db4e6"
                style={{
                  height: '120px',
                  marginBottom: '10px',
                  width: 'auto',
                }}
              />
              <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
                Electronic Warfare
              </Heading>
              <ul className="left-align">
                <li>6m mast above sea level</li>
                <li>Communications and Radar</li>
                <li>Combine with other sensors</li>
                <li>Electronic Support Measures (ESM) platform</li>
              </ul>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <OciusGlobeAlt
                fill="#4db4e6"
                style={{
                  height: '120px',
                  marginBottom: '10px',
                  width: 'auto',
                }}
              />
              <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
                Gateway Communications
              </Heading>
              <ul className="left-align">
                <li>6m mast above sea level</li>
                <li>Combine with other sensors</li>
                <li>Cross-domain communications and data exchange system</li>
              </ul>
            </Col>
          </Row>
          <Spacing />
          <Row>
            <Col xs={12} md={4} lg={4}>
              <OciusGlobeAlt
                fill="#4db4e6"
                style={{
                  height: '120px',
                  marginBottom: '10px',
                  width: 'auto',
                }}
              />
              <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
                Multiple sensors
              </Heading>
              <ul className="left-align">
                <li>More power, payload and performance</li>
                <li>Network with other Bluebottles and assets</li>
                <li>Allows multiple sensors on the same platform</li>
              </ul>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <OciusGlobeAlt
                fill="#4db4e6"
                style={{
                  height: '120px',
                  marginBottom: '10px',
                  width: 'auto',
                }}
              />
              <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
                Mine Counter Measures
              </Heading>
              <ul className="left-align">
                <li>Manage fleets of underwater assets</li>
                <li>Intelligent path planning and manoeuvring systems</li>
                <li>Remain safely in proximity while exchanging high-volume data</li>
              </ul>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <OciusGlobeAlt
                fill="#4db4e6"
                style={{
                  height: '120px',
                  marginBottom: '10px',
                  width: 'auto',
                }}
              />
              <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
                Other
              </Heading>
              <ul className="left-align">
                <li>Intrinsic low-observability</li>
                <li>2 per 20&apos; shipping container</li>
                <li>5-6 m aft communications mast</li>
                <li>Silent when not communicating</li>
                <li>LARS from boat ramp or jetty/deck crane</li>
              </ul>
            </Col>
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
    HeroBackground: file(relativePath: { eq: "images/solutions-defence-bg.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: FULL_WIDTH)
      }
    }
  }
`;

export default DefencePage;

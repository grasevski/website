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

function AGMPage({ data }) {
  return (
    <Layout>
      <SEO
        title="Ocius AGM 2022"
        description="Ocius Pty Ltd Annual General Meeting - 2022"
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
                Ocius AGM
              </Heading>
              <Heading level={2} color="white" size="medium" weight="normal" as="p">
                Ocius Pty Ltd Annual General Meeting - 2022
              </Heading>
              <Spacing $value="80px" />
            </Col>
          </Row>
        </HeroBlock>
      )}

      <Grid className="page-content">
        <Segmented>
          <Row className="centered">
            <Col xs={12} md={12} lg={12} >
              <Spacing $value="80px" />
              <Heading level={2} size="large" weight="thick" underline="center">
                2022 Ocius AGM Virtual Meeting
              </Heading>
              <Spacing $value="40px" />
            </Col>
          </Row>
          <Row className="centered" >
	    <Col xs={12} md={6} lg={6} className="centered">
            <p><a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzY0ZGNiNmQtNTNkNC00NDk4LThjMGItMWIxYzc4OTg5YzVl%40thread.v2/0?context=%7b%22Tid%22%3a%22b75e2711-f5c7-4f6c-a2c2-a1b25937d7f0%22%2c%22Oid%22%3a%221d38c4da-71d1-4d65-9f44-40e7f4a892a4%22%7d">
            {data.TeamsIcon && (
                <GatsbyImage
                  image={data.TeamsIcon.childImageSharp.gatsbyImageData}
                  alt="2022 AGM"
                  href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzY0ZGNiNmQtNTNkNC00NDk4LThjMGItMWIxYzc4OTg5YzVl%40thread.v2/0?context=%7b%22Tid%22%3a%22b75e2711-f5c7-4f6c-a2c2-a1b25937d7f0%22%2c%22Oid%22%3a%221d38c4da-71d1-4d65-9f44-40e7f4a892a4%22%7d"
                />
              )}
            </a></p><br/>
            <p><a href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzY0ZGNiNmQtNTNkNC00NDk4LThjMGItMWIxYzc4OTg5YzVl%40thread.v2/0?context=%7b%22Tid%22%3a%22b75e2711-f5c7-4f6c-a2c2-a1b25937d7f0%22%2c%22Oid%22%3a%221d38c4da-71d1-4d65-9f44-40e7f4a892a4%22%7d">Ocius 2022 AGM</a></p>
            <br/>
            <p style={{ marginBottom: 40 }}>
              To join the AGM click the link above, and when prompted enter your name, then click the button to join. One of our moderators will then verify you and allow you into the meeting.
            </p>
            </Col>
          </Row>
        <Row className="centered">
          <Col xs={12} md={8} lg={8} mdOffset={2}>
            <Spacing $value="80px" />
            <Heading level={2} size="large" weight="thick" underline="center">
              2022 Annual General Meeting
            </Heading>
            <Spacing $value="40px" />
          </Col>
        </Row>
          <Row>
            <SecondColumnMobile className="primary-content" xs={12} md={6} lg={5}>
              <p style={{ marginBottom: 40 }}>
                Ocius Pty Ltd will hold its 2022 AGM at 4:00pm on 24 November 2022,
                at its offices in R14, on the UNSW Randwick Campus at 22 King St, Randwick.
                If attending in person please arrive by 3:30pm, so that we may start on time.
              </p>

              <header>
                <Heading level={2} size="medium" weight="thick" underline="left">
                  Date
                </Heading>
              </header>

              <p style={{ marginBottom: 40 }}>
                4:00pm, November 24th 2022
              </p>

              <header>
                <Heading level={2} size="medium" weight="thick" underline="left">
                  Location
                </Heading>
              </header>

              <p style={{ marginBottom: 40 }}>
                R14, UNSW Randwick Campus, 22 King St, Randwick.
              </p>
            </SecondColumnMobile>
            <FirstColumnMobile xs={12} md={6} lg={6} lgOffset={1}>
              {data.AGMImage && (
                <GatsbyImage
                  image={data.AGMImage.childImageSharp.gatsbyImageData}
                  alt="2021 AGM"
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
    AGMImage: file(relativePath: { eq: "images/agm2021_recording_still.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, width: 768, layout: CONSTRAINED)
      }
    }
    TeamsIcon: file(relativePath: { eq: "images/Microsoft_Office_Teams.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, width: 100, layout: CONSTRAINED)
      }
    }
  }

  fragment constrainedLogotype on File {
    childImageSharp {
      gatsbyImageData(quality: 85, width: 200, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
`;

export default AGMPage;

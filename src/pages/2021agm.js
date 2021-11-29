import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid/src';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import { Spacing } from '../components/common';

const meetingLink =
  'https://teams.microsoft.com/l/meetup-join/19%3ameeting_Njk4NTQxMDYtZTZjMy00NDFkLWI0ZjctODE1ZGM2MTBhMmNj%40thread.v2/0?context=%7b%22Tid%22%3a%22b75e2711-f5c7-4f6c-a2c2-a1b25937d7f0%22%2c%22Oid%22%3a%2250201819-071a-41b9-967d-4e6a383192e3%22%7d';

const AGMPage = () => (
  <Layout>
    <SEO title="2021 Ocius AGM" description="AGM Landing Page" />
    <Grid className="centered">
      <Row className="left-align">
        <Col xs={12} md={12} lg={12}>
          <Spacing $value="80px" />
          <Heading level={1} size="huge" weight="thick" underline="left">
            2021 Ocius AGM
          </Heading>
        </Col>
      </Row>
      <Heading level={2} size="medium" weight="thick">
        Dear Shareholders,
      </Heading>
      <Heading level={3} size="small" as="p" style={{ lineHeight: 1.6 }}>
        Our virtual AGM will be held at <strong>4.30pm Tuesday 30 November</strong>, via Microsoft
        Teams.
      </Heading>

      <Heading level={3} size="small" as="p" style={{ lineHeight: 1.6 }}>
        To join the meeting, Click{' '}
        <strong>
          <a href={meetingLink}>here</a>
        </strong>
        .
      </Heading>

      <Heading level={3} size="small" as="p" style={{ lineHeight: 1.6 }}>
        Please ring us on{' '}
        <a itemProp="telephone" href="tel:+614875457266">
          04875 457 266
        </a>{' '}
        if there are any issues joining the meeting.
      </Heading>
      <Spacing $value="100px" />
    </Grid>
  </Layout>
);

export default AGMPage;

import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid/src';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import { Spacing } from '../components/common';

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
        Instructions on how to attend our virtual AGM will be posted here on{' '}
        <strong> Monday 29 Nov.</strong>
        <br />
        <strong>AGM 4.30pm Tuesday 30 November.</strong>
      </Heading>

      <Spacing $value="100px" />
    </Grid>
  </Layout>
);

export default AGMPage;

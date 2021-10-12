import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Grid, Col, Row } from 'react-styled-flexboxgrid/src';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import { Spacing } from '../components/common';

const AGMPage = ({ data }) => (
  <Layout>
    <SEO title="2021 Ocius AGM" description="AGM Landing Page" />
    <Grid>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Spacing $value="80px" />
          <Heading level={1} size="huge" weight="thick" underline="left">
            2021 Ocius AGM
          </Heading>
        </Col>
      </Row>

      <Heading level={2} size="medium">
        <strong>Dear Shareholders,</strong>
      </Heading>

      <div className="centered">
        <Heading level={2}>
          Instructions on how to attend our virtual AGM will be posted here on <b> Monday 29 Nov. </b>
        </Heading>
        <Heading level={2} weight="thick">
          AGM 4.30pm Tuesday 30 November.
        </Heading>
      </div>
      <Spacing $value="100px" />
    </Grid>
  </Layout>
);

export default AGMPage;

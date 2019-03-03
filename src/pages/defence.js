import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import HeroBlock from '../components/HeroBlock';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import Icon from '../components/Icon';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Segmented from '../components/Segmented';
// Import background image
import HeaderBackground from '../images/submarine.jpg';

const styles = {
  alignment: {
    left: {
      textAlign: 'left'
    },
    center: {
      textAlign: 'center'
    }
  }
};

export default () => (
  <Layout>
    <SEO
      title="Defence"
      description="Persistent USVs are being seen as strategic in Defence as force multipliers Bluebottles have more
       power payload and performance making them the superior persistent USV for defence"
    />
    <HeroBlock
      image={HeaderBackground}
      style={{
        textAlign: 'center',
        color: '#ffffff'
      }}
      constrained
    >
      <Heading level={2} weight="thick">
        Defence
      </Heading>
      <Row>
        <Column sm={12} md={6} lg={6} fluid>
          <Heading level={2} size="medium" weight="thick">
            Anti-Submarine Warfare
          </Heading>
        </Column>
        <Column sm={12} md={6} lg={6} fluid>
          <Heading level={2} size="medium" weight="thick">
            Electronic Warfare
          </Heading>
        </Column>
      </Row>
      <Row>
        <Column sm={12} md={6} lg={6} fluid>
          <Heading level={2} size="medium" weight="thick">
            Mine Counter Measures
          </Heading>
        </Column>
        <Column sm={12} md={6} lg={6} fluid>
          <Heading level={2} size="medium" weight="thick">
            Gateway Communications
          </Heading>
        </Column>
      </Row>
    </HeroBlock>
    <Container style={styles.alignment.center}>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={8} lg={8} lgShift={2} fluid>
            <Heading level={3}>
              Persistent USVs are being seen as strategic in Defence as force multipliers
            </Heading>
            <Heading level={3}>
              <strong>
                Bluebottles have more power payload and performance making them the superior
                persistent USV for defence
              </strong>
            </Heading>
          </Column>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Ship
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Anti-Submarine Warfare</h5>
            <ul style={styles.alignment.left}>
              <li>Silent</li>
              <li>“Reel in keel“ winch</li>
              <li>50W average / kW bursts</li>
              <li>Active &amp; passive arrays</li>
              <li>Depth via speed &amp; winch</li>
              <li>Speed to resolve L-R ambiguity</li>
              <li>Network &amp; collaborate with other Bluebottles &amp; other assets</li>
            </ul>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Podcast
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Electronic Warfare</h5>
            <ul style={styles.alignment.left}>
              <li>6m mast above sea level</li>
              <li>Communications and Radar</li>
              <li>Combine with other sensors</li>
              <li>Electronic Support Measures (ESM) platform</li>
            </ul>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Link
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Gateway Communications</h5>
            <ul style={styles.alignment.left}>
              <li>6m mast above sea level</li>
              <li>Combine with other sensors</li>
              <li>Cross-domain communications and data exchange system</li>
            </ul>
          </Column>
        </Row>
        <Row>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.ConnectDevelop
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Multiple sensors</h5>
            <ul style={styles.alignment.left}>
              <li>More power, payload and performance</li>
              <li>Network with other Bluebottles and assets</li>
              <li>Allows multiple sensors on the same platform</li>
            </ul>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Bomb
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Mine Counter Measures</h5>
            <ul style={styles.alignment.left}>
              <li>Manage fleets of underwater assets</li>
              <li>Intelligent path planning and manoeuvring systems</li>
              <li>Remain safely in proximity while exchanging high-volume data</li>
            </ul>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Anchor
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Other</h5>
            <ul style={styles.alignment.left}>
              <li>Intrinsic low-observability</li>
              <li>2 per 20&apos; shipping container</li>
              <li>5-6 m aft communications mast</li>
              <li>Silent when not communicating</li>
              <li>LARS from boat ramp or jetty/deck crane</li>
            </ul>
          </Column>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Button color="white" size="medium" href="/contact">
          Contact Us Now
        </Button>
      </Segmented>
    </Container>
  </Layout>
);

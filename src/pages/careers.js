import React from 'react';
import { Grid, Row, Col } from '@r007/react-styled-flexboxgrid';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Segmented from '../components/Segmented';
import Layout from '../layouts/Layout';
import Heading from '../components/Heading';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import { Spacing } from '../components/common';

const Accent = styled.span`
  color: #4ab4e6;
  font-weight: 700;
`;

const CenteredCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function CareersPage() {
  return (
    <Layout>
      <SEO
        title="Careers"
        description="Working with Ocius &#8211; &#8220;Oceans is us&#8221; Ocius is an Australian public unlisted
      Sydney-based SME (small to medium enterprise) operating at the cutting edge of technology to design and
      build autonomous robots."
      />
      <section className="page-content">
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Spacing $value="80px" />
              <Heading level={1} size="huge" weight="thick" underline="left">
                Wanted 2022
              </Heading>
            </Col>
          </Row>
          <Spacing $value="20px" $xsValue="0" />

          <Segmented multiplier={2} borderBottom>
            <Row>
              <CenteredCol xs={12} md={8} lg={8}>
                <Heading level={2} size="medium" weight="thick">
                  Working with Ocius <Accent>“Oceans is us”</Accent>
                </Heading>
                <p>
                  Ocius is an Australian company that builds autonomous ocean robots. These drones
                  use the energy of the weather – sun wind and waves – to act as monitoring and
                  communications platforms.
                </p>
                <p>
                  If you like a challenge, can work in a team, and love the ocean you could be part
                  of our exciting future.
                </p>
              </CenteredCol>
            </Row>
          </Segmented>

          <Segmented borderBottom>
            <Row>
              <Col xs={12} md={8} lg={8}>
                <Heading level={3} size="medium" weight="thick">
                  Lead Mechatronics/Software Engineer/Computer Scientist
                  <br />
                  Mechatronics Engineer
                  <br />
                  Software Engineer
                </Heading>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Overview: Hard and Soft Robotics - Project ‘TENTACLE’.
                </Heading>

                <p>
                  UNSW is collaborating with Ocius on a project to build a new and revolutionary
                  hard and soft robotic device related to Ocius’s work with autonomous maritime
                  systems. Details of the project will be released publicly as approved by Defence,
                  but for the purposes of this advertisement the project is called internally at
                  Ocius the Tentacle Project.
                </p>

                <p>
                  Work will be carried out at UNSW and the Ocius facility at the UNSW Randwick
                  Campus with some fieldwork.
                </p>

                <p>
                  We are recruiting three engineers who will be seconded to work with Ocius to
                  develop, operate, and maintain a new robotics product and report to and will be
                  tasked directly by the Ocius CEO.
                </p>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Responsibilities
                </Heading>

                <p>Specific responsibilities for the three roles include:</p>

                <ul style={{ marginTop: 0 }}>
                  <li>
                    Assist in the design and implementation of the on-board electrical, mechanical
                    and computer systems for Tentacle Project;
                  </li>
                  <li>
                    Prepare technical documentation and procedures needed to support the development
                    and operation of Tentacle Project;
                  </li>
                  <li>Support troubleshooting and maintenance of the Tentacle Project;</li>
                  <li>
                    Assist with the planning, organisation of and conducting of field trials of the
                    Tentacle Project;
                  </li>
                  <li>
                    Collect and interpret results of field trials and prepare technical reports for
                    use by others;
                  </li>
                  <li>
                    Support work health safety activities in compliance with relevant workplace
                    policies including risk assessments, implementation of safe work procedures,
                    development and maintenance of relevant WHS records and registers, provision of
                    WHS training and inductions to staff, students and contractors;
                  </li>
                  <li>
                    Cooperate with all health and safety policies and procedures of the organisation
                    and take all reasonable care to ensure that your actions or omissions do not
                    impact on the health and safety of yourself or others.
                  </li>
                </ul>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Duties and Responsibilities
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>
                    Software and hardware design, development, integration and validation for
                    autonomous vehicle control, device management, navigation, communications, and
                    related applications.
                  </li>
                  <li>
                    Interact with product management to obtain and understand requirements and
                    deliverables and develop test plans.
                  </li>
                  <li>Interface with vehicle operations and engineering team members.</li>
                </ul>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Requirements
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>C++/JavaScript/Python development experience.</li>
                  <li>Bachelor’s degree in Mechatronics Engineering.</li>
                  <li>Ability to develop on Linux, Windows and embedded systems.</li>
                  <li>
                    Ability to work in a fast-paced dynamic environment where initiative is required
                    for success.
                  </li>
                  <li>
                    Ability to obtain and maintain a minimum of Defence Security Clearance–Baseline
                    including Australian Passport
                  </li>
                </ul>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Desirable
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Experience with autonomous vehicles.</li>
                  <li>Experience with Ardupilot and supporting tools.</li>
                  <li>Full stack development.</li>
                  <li>Strong mechanical aptitude.</li>
                  <li>Maritime industry or defence experience relevant to the position</li>
                </ul>
              </Col>
            </Row>
            <Heading className="centered" level={3} size="small" weight="thick" color="#4ab4e6">
              For further details please contact{' '}
              <a href="mailto:admin@ocius.com.au">admin@ocius.com.au</a>.
            </Heading>
          </Segmented>

          <Segmented borderBottom>
            <Row>
              <Col xs={12} md={8} lg={8}>
                <Heading level={3} size="medium" weight="thick">
                  Unmanned Surface Vessel – <br />
                  Casual Marine Support Crew
                </Heading>

                <p>Position: Unmanned Surface Vessel (USV) Casual Marine Support Crew (MSC) </p>
                <p>Reporting to: Operations Supervisor </p>
                <p>Location: Broome, WA </p>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Background
                </Heading>

                <p>
                  Ocius is an Australian company that builds autonomous Unmanned Surface Vessels
                  (USVs). These USVs use the energy of the weather – sun wind and waves – to act as
                  persistent monitoring and communications platforms. We are embarking on an
                  ambitious program of operating the fleet of USVs offshore 24/7.
                </p>

                <p>
                  A key part of this program is to deploy and operate the USVs in Broome during 2022
                  and we are therefore looking for interested people to join our operations team in
                  Broome to help with Launch and Recover as well as maintenance on the fleet on a
                  flexible and casual contract.
                </p>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Duties and Responsibilities
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Launch and recovery of USVs.</li>
                  <li>
                    Inspection, cleaning and maintanence of USVs, workshop and trailers where
                    required.
                  </li>
                  <li>
                    Following instructions from engineers to assist in upgrading/repairing
                    electronic or mechanical systems.
                  </li>
                  <li>
                    Opportunities to be involved in piloting the boats remotley during operation.
                  </li>
                </ul>

                <p>On occasion this role may involve:</p>

                <ul style={{ marginTop: 0 }}>
                  <li>
                    Assiting with implementing, maintaining, managing and updating all standard
                    operating procedures and processes appropriate to the role.
                  </li>
                </ul>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Requirements
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Ability to adhere to operating proceudures.</li>
                  <li>
                    Enthusiastic, positive and proactive nature with a keen attention to detail.
                  </li>
                  <li>Willingness to work outside normal hours ocasionally.</li>
                  <li>Ability to learn about complex electronic and mechanical systems.</li>
                </ul>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Desirable
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Boat Licence/Relevant Certificate of Competency as issued by AMSA.</li>
                  <li>Sailing/Maritime experience.</li>
                  <li>Keen interest in autonomous systems.</li>
                  <li>
                    Ability to obtain and maintain a minimum of Defence Security Clearance–Baseline.
                  </li>
                </ul>
              </Col>
            </Row>
            <Heading className="centered" level={3} size="small" weight="thick" color="#4ab4e6">
              For further details please contact{' '}
              <a href="mailto:admin@ocius.com.au">admin@ocius.com.au</a>.
            </Heading>
          </Segmented>

          <Segmented borderBottom>
            <Row>
              <Col xs={12} md={8} lg={8}>
                <Heading level={3} size="medium" weight="thick">
                  Unmanned Surface Vessel – <br />
                  Full Time Ground Control Operator
                </Heading>

                <p>Position: Full Time Ground Control Operator </p>
                <p>Reporting to: Operations Supervisor </p>
                <p>Location: Randwick, Sydney </p>
                <p>Hours: 40 per week</p>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Background
                </Heading>

                <p>
                  Ocius is an Australian company that builds and operates autonomous Unmanned
                  Surface Vessels (USVs). These USVs use the energy of the weather – sun wind and
                  waves – to act as persistent monitoring and communications platforms.
                </p>
                <p>
                  We are embarking on an ambitious program to operate our fleet of USVs offshore
                  24/7 in varying locations around Australia. There is a requirement for someone on
                  a shore-based ground control station to always monitor and navigate the vessels.
                </p>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Duties and Responsibilities
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Piloting of USVs on a shift based 24-hour operation schedule. </li>
                  <li>Safe navigation of the USV fleet in compliance with COLREGS. </li>
                  <li>
                    Keeping watch on cameras, radar and other sensors for potential hazards to the
                    USV.
                  </li>
                  <li>
                    Monitoring the vessel health and behaviour and occasionally working with
                    developers to improve the platforms.
                  </li>
                  <li>
                    Interpretation of weather data before and during missions to ensure the safe
                    operation of the USV.
                  </li>
                  <li>Communicating with stakeholders about the operation when on shift. </li>
                  <li>Maintaining mission logs including vessel systems. </li>
                </ul>
                <p>On occasion this role may involve:</p>
                <ul style={{ marginTop: 0 }}>
                  <li>
                    Assiting with implementing, maintaining, managing and updating all standard
                    operating procedures and processes appropriate to the role.
                  </li>
                </ul>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Requirements
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Strong computer literacy skills.</li>
                  <li>Reliable broadband internet.</li>
                  <li>Ability to adhere to operating proceudures.</li>
                  <li>
                    Enthusiastic, positive and proactive nature with a keen attention to detail.
                  </li>
                  <li>Ability to work outside normal business hours when required. </li>
                </ul>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Desirable
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Maritime industry or defence experience relevant to the position.</li>
                  <li>Relevant Certificate of Competency as issued by AMSA.</li>
                  <li>Sailing experience.</li>
                  <li>
                    Ability to obtain and maintain a minimum of Defence Security Clearance–Baseline.
                  </li>
                  <li>Keen interest/experience in autonomous systems.</li>
                </ul>
              </Col>
            </Row>
            <Heading className="centered" level={3} size="small" weight="thick" color="#4ab4e6">
              For further details please contact{' '}
              <a href="mailto:admin@ocius.com.au">admin@ocius.com.au</a>.
            </Heading>
          </Segmented>

          <Segmented borderBottom>
            <Row>
              <Col xs={12} md={8} lg={8}>
                <Heading level={3} size="medium" weight="thick">
                  Unmanned Surface Vessel – <br />
                  Marine Support Crew
                </Heading>

                <p>Position: Marine Support Crew (MSC)</p>
                <p>Reporting to: Operations Manager</p>
                <p>Location: Randwick, NSW. Travel will be frequent and required.</p>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Background
                </Heading>

                <p>
                  Ocius is an Australian company that builds autonomous Unmanned Surface Vessels
                  (USVs). These USVs use the energy of the weather – sun wind and waves – to act as
                  persistent monitoring and communications platforms. We are embarking on an
                  ambitious program of operating the fleet of USVs offshore 24/7.
                </p>
                <p>
                  A key part of this program is to deploy and operate the USVs in different
                  locations domestically and internationally. We are therefore looking for
                  interested people to join our operations team on a Full-Time contract.
                </p>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Duties and Responsibilities
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Travel to remote locations to support the USVs as MSC.</li>
                  <li>Launch and recovery of USVs.</li>
                  <li>
                    Inspection, cleaning and maintanence of USVs, workshop and trailers where
                    required.
                  </li>
                  <li>
                    Following instructions from engineers to assist in upgrading/repairing
                    electronic or mechanical systems.
                  </li>
                  <li>
                    Assist with planning, organization, and execution of any USV operations as
                    required.
                  </li>
                  <li>
                    Opportunities to be involved in piloting the boats remotley during operation.
                  </li>
                </ul>
                <p>On occasion this role may involve:</p>
                <ul style={{ marginTop: 0 }}>
                  <li>
                    Assiting with implementing, maintaining, managing and updating all standard
                    operating procedures and processes appropriate to the role.
                  </li>
                </ul>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Requirements
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Happy to be a vagabond and move to and expolore new places.</li>
                  <li>Ability to adhere to operating proceudures.</li>
                  <li>
                    Enthusiastic, positive and proactive nature with a keen attention to detail.
                  </li>
                  <li>Willingness to work outside normal hours.</li>
                  <li>Ability to learn about complex electronic and mechanical systems.</li>
                </ul>

                <Heading level={4} size="small" weight="thick" color="#4ab4e6">
                  Desirable
                </Heading>

                <ul style={{ marginTop: 0 }}>
                  <li>Boat Licence/Relevant Certificate of Competency as issued by AMSA.</li>
                  <li>Sailing/Maritime experience.</li>
                  <li>Keen interest in autonomous systems.</li>
                  <li>
                    Ability to obtain and maintain a minimum of Defence Security Clearance–Baseline.
                  </li>
                </ul>
              </Col>
            </Row>
            <Heading className="centered" level={3} size="small" weight="thick" color="#4ab4e6">
              For further details please contact{' '}
              <a href="mailto:admin@ocius.com.au">admin@ocius.com.au</a>.
            </Heading>
          </Segmented>
        </Grid>

        <Segmented>
          <NewsletterForm />
        </Segmented>
        <Segmented>
          <ContactUs />
        </Segmented>
      </section>
    </Layout>
  );
}

export default CareersPage;

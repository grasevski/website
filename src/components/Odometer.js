import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import mq from '../common/mq';
import loadable from '@loadable/component';
import 'odometer/themes/odometer-theme-car.css';

const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 300px;
  background: #000;
  color: #eee0d3;
  padding: 0.15em;
  display: inline-block;
  border-radius: 0.34em;
  font-family: "Arimo", monospace;
`;

function ReactOdometer({valueMeters}) {
  const Odometer = loadable(() => import('react-odometerjs'));
  const valueNauticalMiles = 0.000539957 * valueMeters;
  return <Container><Odometer value={valueNauticalMiles} format="(,ddd).d" />NM</Container>;
}

ReactOdometer.propTypes = {valueMeters: PropTypes.number};
ReactOdometer.defaultProps = {valueMeters: 0};
export default ReactOdometer;

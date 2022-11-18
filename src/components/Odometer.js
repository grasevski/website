import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import mq from '../common/mq';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-car.css';

const Container = styled.div`
  width: 200px;
  height: 120px;
  position: absolute;
  top: 60px;
  left: 300px;
  padding: 20px;

  @media (max-width: ${mq.max[768]}) {
    width: 100px;
    height; 100px;
    top: 40px;
    right: 0;
  }
`;

function ReactOdometer() {
  return <Container><Odometer value={20520.7} format="(,ddd).d" />NM</Container>;
}

ReactOdometer.propTypes = {};
ReactOdometer.defaultProps = {};
export default ReactOdometer;

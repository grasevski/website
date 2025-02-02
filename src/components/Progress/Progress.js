import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { STATUSES, COLOR_MAP, DEFAULT_TRAIL_COLOR } from './constants';
import Line from './Line';

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function Progress({ percent, theme, style, className }) {
  let progressStatus = null;

  if (percent <= 25) {
    progressStatus = STATUSES.DANGER;
  } else if (percent <= 50) {
    progressStatus = STATUSES.WARNING;
  } else if (percent <= 75) {
    progressStatus = STATUSES.SUCCESS;
  } else if (percent <= 100) {
    progressStatus = STATUSES.ACTIVE;
  }

  const themeProgress = theme && theme[progressStatus];
  const progressColor = themeProgress ? themeProgress.color : COLOR_MAP[progressStatus];
  const trailColor = themeProgress ? themeProgress.trailColor : DEFAULT_TRAIL_COLOR;

  return (
    <ProgressWrapper className={className} style={style}>
      <Line
        percent={percent}
        status={progressStatus}
        background={progressColor}
        trailColor={trailColor}
      />
    </ProgressWrapper>
  );
}

Progress.propTypes = {
  percent: PropTypes.number,
  theme: PropTypes.objectOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
};

Progress.defaultProps = {
  percent: 0,
  theme: {},
  style: {},
  className: '',
};

export default Progress;

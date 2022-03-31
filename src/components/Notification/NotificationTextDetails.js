import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem 0;
`;

const NotificationTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.28572;
  letter-spacing: 0.16px;
  margin: 0 0.4rem 0 0;
`;

const NotificationSubtitle = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.28572;
  letter-spacing: 0.16px;
  word-break: break-word;
`;

function NotificationTextDetails({ title, subtitle, caption, children, ...other }) {
  return (
    <TextWrapper {...other}>
      <NotificationTitle>{title}</NotificationTitle>
      <NotificationSubtitle>{subtitle}</NotificationSubtitle>
      {children}
    </TextWrapper>
  );
}

NotificationTextDetails.propTypes = {
  /**
   * Pass in the children that will be rendered in NotificationTextDetails
   */
  children: PropTypes.node,
  /**
   * Specify the title
   */
  title: PropTypes.string,
  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.node,
  /**
   * Specify the caption
   */
  caption: PropTypes.node,
};

NotificationTextDetails.defaultProps = {
  children: null,
  title: 'title',
  subtitle: 'subtitle',
  caption: 'caption',
};

export default NotificationTextDetails;

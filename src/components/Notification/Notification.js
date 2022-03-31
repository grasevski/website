import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NotificationCloseButton from './NotificationCloseButton';
import NotificationTextDetails from './NotificationTextDetails';
import Info from '../Icons/Info';

const NotificationWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 28.8rem;
  max-width: 28.8rem;
  height: auto;
  min-height: 4.8rem;
  flex-wrap: wrap;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  color: ${(props) => props.theme.colors.themeDark};
  border-left: 3px solid ${(props) => props.theme.colors.themePrimary};
  background: ${(props) => props.theme.colors.bgPrimary};

  @media (min-width: 67.2rem) {
    max-width: 60.8rem;
    flex-wrap: nowrap;
  }

  @media (min-width: 105.6rem) {
    max-width: 73.6rem;
  }
`;

const NotificationDetails = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 0 4.8rem 0 1.6rem;

  @media (min-width: 67.2rem) {
    margin: 0 1.6rem;
  }
`;

const NotificationIcon = styled(Info)`
  flex-shrink: 0;
  margin-top: 1.4rem;
  margin-right: 1.6rem;
`;

function Notification({
  role,
  onCloseButtonClick,
  iconDescription,
  className,
  subtitle,
  title,
  hideCloseButton,
  children,
  ...other
}) {
  const [open, setOpen] = useState(true);

  const handleCloseButtonClick = (evt) => {
    setOpen(false);
    onCloseButtonClick(evt);
  };

  if (!open) {
    return null;
  }

  return (
    <NotificationWrapper {...other} role={role} className={className}>
      <NotificationDetails>
        <NotificationIcon
          style={{
            height: 20,
            width: 20,
          }}
        />
        <NotificationTextDetails title={title} subtitle={subtitle}>
          {children}
        </NotificationTextDetails>
      </NotificationDetails>
      {!hideCloseButton && (
        <NotificationCloseButton
          iconDescription={iconDescription}
          onClick={handleCloseButtonClick}
        />
      )}
    </NotificationWrapper>
  );
}

Notification.propTypes = {
  /**
   * Pass in the children that will be rendered within the InlineNotification
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: PropTypes.string,

  /**
   * Specify the title
   */
  title: PropTypes.string.isRequired,

  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.node.isRequired,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: PropTypes.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: PropTypes.bool,
};

Notification.defaultProps = {
  children: null,
  className: null,
  role: 'alert',
  iconDescription: 'closes notification',
  onCloseButtonClick: () => {},
  hideCloseButton: false,
};

export default Notification;

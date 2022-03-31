import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Close20 from '../Icons/Close20';

const Button = styled.button`
  outline: 2px solid transparent;
  outline-offset: -2px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 4.8rem;
  min-width: 4.8rem;
  max-width: 4.8rem;
  height: 4.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: 0 0;
  cursor: pointer;
  transition: outline 110ms cubic-bezier(0.2, 0, 0.38, 0.9),
    background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
`;

function NotificationCloseButton({ ariaLabel, className, iconDescription, type, ...other }) {
  return (
    <Button
      {...other}
      type="button"
      aria-label={iconDescription}
      title={iconDescription}
      className={className}
    >
      <Close20
        style={{
          height: 20,
          width: 20,
        }}
      />
    </Button>
  );
}

NotificationCloseButton.propTypes = {
  /**
   * Specify an optional className to be applied to the notification button
   */
  className: PropTypes.string,

  /**
   * Specify a label to be read by screen readers on the notification button
   */
  ariaLabel: PropTypes.string,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,
};

NotificationCloseButton.defaultProps = {
  className: '',
  ariaLabel: 'close notification', // TODO: deprecate this prop
  iconDescription: 'close icon',
};

export default NotificationCloseButton;

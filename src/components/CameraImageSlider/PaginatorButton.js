import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';

const Button = styled.button`
  position: absolute;
  color: #ffffff;
  font-size: 1em;
  line-height: 0;
  top: 50%;
  border-radius: 2px;
  transform: translate(0, -50%);
  cursor: pointer;
  border: none;
  z-index: 10;

  ${switchProp('$backgroundColor', {
    gray: css`
      background-color: ${(props) => props.theme.colors.neutralPrimary};
    `,

    blue: css`
      background-color: ${(props) => props.theme.colors.themePrimary};
    `,
  })}

  ${switchProp('$size', {
    small: css`
      padding: 5px;
    `,

    medium: css`
      padding: 8px;
      top: 45%;
    `,
  })}

  ${switchProp('$direction', {
    Left: css`
      left: 0;
    `,

    Right: css`
      right: 0;
    `,
  })}
`;

function PaginatorButton({ direction, size, backgroundColor, onClick }) {
  const icon = direction === 'Left' ? <ChevronLeft /> : <ChevronRight />;
  const label = direction === 'Left' ? 'Previous' : 'Next';

  return (
    <Button
      className="PaginatorButton"
      $direction={direction}
      $size={size}
      $backgroundColor={backgroundColor}
      title={label}
      onClick={onClick}
      aria-label={label}
    >
      {icon}
    </Button>
  );
}

PaginatorButton.propTypes = {
  /**
   * Change the direction the arrow points
   */
  direction: PropTypes.oneOf(['Left', 'Right']).isRequired,

  /**
   * Change the size of the button
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * Custom background color of the button
   */
  backgroundColor: PropTypes.oneOf(['gray', 'blue']),

  /**
   * Function to run when the button is clicked
   */
  onClick: PropTypes.func,
};

PaginatorButton.defaultProps = {
  size: 'small',
  backgroundColor: 'gray',
  onClick: null,
};

export default PaginatorButton;

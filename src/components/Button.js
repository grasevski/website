import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import { OutboundLink as GtagLink } from 'gatsby-plugin-gtag';
import DynamicLink from './DynamicLink';

const borderStyle = css`
  box-shadow: none;
`;

const roundedStyle = css`
  border-radius: 100px;
  padding-left: ${21 / 9}em;
  padding-right: ${21 / 9}em;
  padding-top: ${12 / 9}em;

  ${switchProp('$size', {
    tiny: css`
      padding-bottom: ${9 / 9}em;
    `,

    small: css`
      padding-bottom: ${10 / 9}em;
    `,

    medium: css`
      padding-bottom: ${9 / 9}em;
    `,

    large: css`
      padding-bottom: ${10 / 9}em;
    `,

    huge: css`
      padding-bottom: ${9 / 9}em;
    `,
  })}
`;

const fullStyle = css`
  display: block;
  width: 100%;
`;

const ButtonStyles = css`
  appearance: none;
  backface-visibility: hidden;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  -moz-box-align: center;
  align-items: center;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.bold};
  line-height: 1;
  overflow: hidden;
  padding-left: ${30 / 13}em;
  padding-right: ${30 / 13}em;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  vertical-align: middle;
  white-space: nowrap;

  & + & {
    margin-left: 2em;
  }

  :active,
  :hover,
  :focus {
    text-decoration: none;
  }

  ${switchProp('$color', {
    gray: css`
      background-color: ${(props) => props.theme.colors.neutralLight};
      color: ${(props) => props.theme.colors.neutralPrimary};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.neutralPrimary} inset;

      :focus,
      :hover,
      :active {
        background-color: ${(props) => props.theme.colors.neutralPrimary};
        color: ${(props) => props.theme.colors.neutralLight};
      }
    `,

    blue: css`
      background-color: ${(props) => props.theme.colors.themePrimary};
      color: ${(props) => props.theme.colors.bgPrimary};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.themePrimary} inset;

      :focus,
      :hover,
      :active {
        background-color: ${(props) => props.theme.colors.themeDark};
        color: ${(props) => props.theme.colors.neutralLight};
      }
    `,

    white: css`
      background-color: ${(props) => props.theme.colors.bgPrimary};
      background-size: 4rem 4rem;
      color: ${(props) => props.theme.colors.themeDark};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.themePrimary} inset;

      :focus,
      :hover,
      :active {
        color: ${(props) => props.theme.colors.bgPrimary};
        background-color: ${(props) => props.theme.colors.themePrimary};
      }
    `,

    transparent: css`
      background-color: transparent;
      color: ${(props) => props.theme.colors.bgPrimary};
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.themePrimary} inset;

      :focus,
      :hover,
      :active {
        background-color: transparent;
        color: ${(props) => props.theme.colors.themePrimary};
      }
    `,
  })}

  ${switchProp('$size', {
    tiny: css`
      font-size: 13px;
      padding-bottom: ${9 / 9}em;
      padding-left: ${19 / 9}em;
      padding-right: ${19 / 9}em;
      padding-top: ${12 / 9}em;
    `,

    small: css`
      font-size: 16px;
      padding-bottom: ${15 / 15}em;
      padding-top: ${18 / 15}em;
    `,

    medium: css`
      font-size: 17px;
      padding-bottom: ${21 / 13}em;
      padding-top: ${26 / 13}em;
    `,

    large: css`
      font-size: 15px;
      padding-bottom: ${23 / 15}em;
      padding-top: ${28 / 15}em;
    `,

    huge: css`
      font-size: 17px;
      padding-bottom: ${25 / 17}em;
      padding-top: ${30 / 17}em;
    `,
  })}

  ${(props) => props.$rounded && roundedStyle}
  ${(props) => props.$full && fullStyle}
  ${(props) => !props.$border && borderStyle}
`;

const ButtonLink = styled(DynamicLink)`
  ${ButtonStyles}
`;

const OutboundLink = styled(GtagLink)`
  ${ButtonStyles}
`;

/**
 * Button-specific styles
 */
const FormButton = styled.button`
  ${ButtonStyles}

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

/**
 * Button component
 * @usage
 * <Button href="/foo">Bar</Button>
 */
function Button({
  href,
  children,
  onClick,
  color,
  size,
  rounded,
  full,
  border,
  customStyles,
  className,
  type,
  ...rest
}) {
  if (!type)
    return (
      <ButtonLink
        className={className}
        style={customStyles}
        to={href}
        onClick={onClick}
        $color={color}
        $size={size}
        $rounded={rounded ? 1 : undefined}
        $full={full ? 1 : undefined}
        $border={border ? 1 : undefined}
        {...rest}
      >
        {children}
      </ButtonLink>
    );
  if (type === 'outbound')
    return (
      <OutboundLink
        className={className}
        style={customStyles}
        href={href}
        onClick={onClick}
        $color={color}
        $size={size}
        $rounded={rounded ? 1 : undefined}
        $full={full ? 1 : undefined}
        $border={border ? 1 : undefined}
        {...rest}
      >
        {children}
      </OutboundLink>
    );
  return (
    <FormButton
      className={className}
      style={customStyles}
      type={type}
      onClick={onClick}
      $color={color}
      $size={size}
      $rounded={rounded ? 1 : undefined}
      $full={full ? 1 : undefined}
      $border={border ? 1 : undefined}
      {...rest}
    >
      {children}
    </FormButton>
  );
}

Button.propTypes = {
  /**
   * Pass an to prop to make the button an `a` element instead of a `button`
   */
  href: PropTypes.string,

  /**
   * Content for the button
   */
  children: PropTypes.node.isRequired,

  /**
   * Function to run when the button is clicked
   */
  onClick: PropTypes.func,

  /**
   * Color of the button
   */
  color: PropTypes.oneOf(['white', 'gray', 'blue', 'transparent']),

  /**
   * Size of the button
   * tiny: 30 px tall
   * small: 44 px tall
   * medium: 60 px tall
   * large: 66 px tall
   * huge: 72 px tall
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),

  /**
   * Use a rounded button
   */
  rounded: PropTypes.bool,

  /**
   * Allow button to span available width
   */
  full: PropTypes.bool,

  /**
   * Special styles passed in props
   */
  customStyles: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),

  /**
   * Use a border
   */
  border: PropTypes.bool,

  /**
   * Add classname to button
   */
  className: PropTypes.string,

  /**
   * Add type of the button
   */
  type: PropTypes.string,
};

Button.defaultProps = {
  href: null,
  onClick: null,
  color: 'transparent',
  size: 'medium',
  rounded: false,
  full: false,
  border: false,
  customStyles: null,
  className: null,
  type: null,
};

export default Button;

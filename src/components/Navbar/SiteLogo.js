import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import styled from 'styled-components';
import mq from '../../common/mq';

const LogoLink = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  user-select: none;
  height: 32px;

  @media (min-width: ${mq.min[768]}) and (max-width: ${mq.max[1024]}) {
    height: 25px;
  }

  @media (max-width: ${mq.max[768]}) {
    height: 19px;
    margin-right: auto;
    margin-left: 10px;
  }
`;

const LogoImage = styled.img`
  align-self: center;
  max-height: 100%;
`;

function SiteLogo({ className, href }) {
  const { file } = useStaticQuery(
    graphql`
      {
        file(relativePath: { eq: "images/ocius-logo-header.png" }) {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    `
  );

  // Get logo image
  const logo = getSrc(file);

  return (
    <LogoLink className={className} key="brand" to={href}>
      <LogoImage src={logo} alt="Website logo" />
    </LogoLink>
  );
}

SiteLogo.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
};

SiteLogo.defaultProps = {
  className: '',
  href: '/',
};

export default SiteLogo;

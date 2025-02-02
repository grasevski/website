import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import ArrowLeft from './Icons/ArrowLeft';
import ArrowRight from './Icons/ArrowRight';

const Item = styled.div`
  display: inline-block;
  padding: 8px 15px;
  margin: 0 5px;
  background-color: #d4dde1;
  border-radius: 3px;
  transition: 0.2s linear;

  :hover {
    background-color: #b6c5cc;
  }
`;

const Navigation = styled.nav`
  text-align: center;
`;

const Link = styled(GatsbyLink)`
  :hover {
    text-decoration: none;
  }
`;

function Pagination({ pageContext }) {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <Navigation className="pagination" role="navigation">
      {nextPagePath && (
        <Item>
          <Link to={nextPagePath} rel="next">
            <ArrowLeft
              fill="#125192"
              style={{
                width: '12px',
                height: '12px',
                marginRight: '3px',
              }}
            />
            Older posts
          </Link>
        </Item>
      )}
      {previousPagePath && (
        <Item>
          <Link to={previousPagePath} rel="prev">
            Newer posts
            <ArrowRight
              fill="#125192"
              style={{
                width: '12px',
                height: '12px',
                marginLeft: '3px',
              }}
            />
          </Link>
        </Item>
      )}
    </Navigation>
  );
}

export default Pagination;

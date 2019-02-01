import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import {graphql} from "gatsby";

export default ({ data }) => (
  <Layout>
    <Header content="News" />

    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <span> — {node.frontmatter.date} </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
);

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        vimeoID,
        chatRoomID,
      },
    },
  } = data;
  return (
    <div>
      <p>{title}</p>
      <p>{vimeoID}</p>
      <div id={chatRoomID} />
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        vimeoID
        chatRoomID
      }
    }
  }
`;

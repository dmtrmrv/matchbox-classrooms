import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        vimeoID,
        chatRoomID,
        chatClientID,
      },
    },
  } = data;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <p>{title}</p>
        <p>{vimeoID}</p>
        <p>{chatRoomID}</p>
        <p>{chatClientID}</p>
        <div id={chatRoomID} />
      </div>
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
        chatClientID
      }
    }
  }
`;

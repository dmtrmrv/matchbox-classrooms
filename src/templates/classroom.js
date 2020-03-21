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
      <iframe
        title={title}
        src={`https://player.vimeo.com/video/${vimeoID}?title=0&byline=0&portrait=0`}
        width="800"
        height="450"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
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

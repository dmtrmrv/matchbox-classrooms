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
      <iframe src="https://player.vimeo.com/video/396392696?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <div id={chatRoomID} ></div>
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

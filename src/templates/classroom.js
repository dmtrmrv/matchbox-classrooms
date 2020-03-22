import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Template({ data }) {
  const chatWrapRef = useRef(null);

  const {
    markdownRemark: {
      frontmatter: {
        title,
        vimeoID,
        rtRoomID,
        rtClientID,
      },
    },
  } = data;

  useEffect(() => {
    const script = document.createElement('script');

    script.src = `https://rumbletalk.com/client/?${rtClientID}`;
    console.log(script);

    chatWrapRef.current.appendChild(script);
  }, []);

  return (
    <Layout>
      <SEO title={title} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="video-wrap">
              <iframe
                title={title}
                src={`https://player.vimeo.com/video/${vimeoID}?title=0&byline=0&portrait=0`}
                width="800"
                height="450"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="chat-wrap" ref={chatWrapRef}>
              <div id={rtRoomID} />
              {/* <Helmet>
                <script src={`https://rumbletalk.com/client/?${rtClientID}`} />
              </Helmet> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        vimeoID
        rtRoomID
        rtClientID
      }
    }
  }
`;

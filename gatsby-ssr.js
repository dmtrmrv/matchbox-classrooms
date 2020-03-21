const React = require('react');
const config = require('./gatsby-config');

exports.onRenderBody = ({ pathname, setPostBodyComponents }) => {
  if (pathname.includes('/classrooms/')) {
    setPostBodyComponents([
      <script src={`https://rumbletalk.com/client/?${config.siteMetadata.rumbleTalkClientID}`} />,
    ]);
  }
};

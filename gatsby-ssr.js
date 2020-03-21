const React = require('react');
const config = require('./gatsby-config');

exports.onRenderBody = ({ pathname, setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="https://rumbletalk.com/client/?DDxaq3_r"></script>,
  ]);
};

module.exports = {
  siteMetadata: {
    title: 'Matchbox Classrooms',
    description: 'Learning Environment',
    author: 'Matchbox Virtual Media',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'classrooms',
        path: `${__dirname}/src/classrooms`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'matchbox-virtual-media',
        short_name: 'matchbox',
        start_url: '/',
        background_color: '#980500',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/matchbox-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};

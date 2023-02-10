import type { GatsbyConfig } from "gatsby";

require('dotenv').config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MY 2nd portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }
,{
  resolve: 'gatsby-source-microcms',
  options: {
    apiKey: 'eqozQc22Evt6Ow81OnN80RI9T293wjiFi4Yh',
    serviceId: 'mayuimanakaportfolio',
    apis: [
      {
        endpoint:'blogs',
      },
      {
        endpoint: 'categories',
      }
    ]
  }
}]
};

export default config;

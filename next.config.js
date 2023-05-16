// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */

  swcMinify: true,

  // ssr and displayName are configured by default
  styledComponents: true,

  i18n: {
    locales: ["en-US", "fr", "nl-NL", "nl-BE"],
    defaultLocale: "en-US",

    domains: [
      {
        // Note: subdomains must be included in the domain value to be matched
        // e.g. www.example.com should be used if that is the expected hostname
        domain: "example.com",
        defaultLocale: "en-US",
      },
      {
        domain: "example.fr",
        defaultLocale: "fr",
      },
      {
        domain: "example.nl",
        defaultLocale: "nl-NL",
        // specify other locales that should be redirected to this domain
        locales: ["nl-BE"],
      },
    ],
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({ pageExtensions: ["ts", "tsx", "md", "mdx"] });

module.exports = nextConfig;

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */

  swcMinify: true,

  // ssr and displayName are configured by default
  styledComponents: true,
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

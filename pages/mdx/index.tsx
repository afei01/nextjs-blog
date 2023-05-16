import { Code, Heading, Pre, Table, Text } from "my-component";

import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage,
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text,
  code: Pre,
  inlineCode: Code,
};

export default function Post(props: any) {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  );
}

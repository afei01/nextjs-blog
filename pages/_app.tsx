import "../styles/globals.css";

import { AppProps } from "next/app";
import React from "react";

export function reportWebVitals({
  id,
  name,
  startTime,
  value,
  label,
}: {
  id: string;
  name: string;
  startTime: string;
  value: string;
  label: string;
}) {
  console.log("====================================");
  console.log(
    "metric definition>>>",
    ` Time to First Byte (TTFB)
                      First Contentful Paint (FCP)
                      Largest Contentful Paint (LCP)
                      First Input Delay (FID)
                      Cumulative Layout Shift (CLS)`
  );
  console.log(
    "metric>>>",
    `name:${name}    startTime:${startTime}    value:${value}    label:${label}`
  );
  console.log("====================================");
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>;
}

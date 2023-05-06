import "../styles/globals.css";

import React from "react";

export default function App({
  Component,
  pageProps,
}: {
  Component: JSX.Element;
  pageProps: Record<string, unknown>;
}) {
  return <Component {...pageProps} />;
}

import Layout, { siteTitle } from "../components/Layout";

import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Nothing to say</p>
      </section>
    </Layout>
  );
}

import Layout, { siteTitle } from "../components/Layout";

import Date from "../components/Date";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Home({
  allPostsData,
}: {
  allPostsData: { id: string; date: string; title: string }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm chenfei, a full stack software engineer.</p>
        <p>My dream is running away from china!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

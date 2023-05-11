import Layout, { siteTitle } from "../components/Layout";

import Date from "../components/Date";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import { getSortedFEPostsData } from "../lib/frontEndPosts";
import { getSortedOtherPostsData } from "../lib/otherPosts";
import utilStyles from "../styles/utils.module.css";

export function getStaticProps() {
  const allFEPostsData = getSortedFEPostsData();
  const allOtherPostsData = getSortedOtherPostsData();
  return { props: { allFEPostsData, allOtherPostsData } };
}

export default function Home({
  allFEPostsData,
  allOtherPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm chenfei, a full stack software engineer. My dream is running away
          from china!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Front End Blog</h2>
        <ul className={utilStyles.list}>
          {allFEPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <h2 className={utilStyles.headingLg}>Others</h2>
        <ul className={utilStyles.list}>
          {allOtherPostsData.map(({ id, date, title }) => (
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

import { getAllFEPostIds, getFEPostData } from "../../lib/frontEndPosts";
import { getAllOtherPostIds, getOtherPostData } from "../../lib/otherPosts";

import Date from "../../components/Date";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import Layout from "../../components/Layout";
import React from "react";
import utilStyles from "../../styles/utils.module.css";

export function getStaticPaths() {
  const paths = [...getAllFEPostIds(), ...getAllOtherPostIds()];
  return {
    paths,
    fallback: false,
  };
}

type InferGetStaticPathsType<T extends (args: any) => any> =
  ReturnType<T>["paths"][0];

export async function getStaticProps({
  params: { id },
}: InferGetStaticPathsType<typeof getStaticPaths>) {
  const postData = await (getAllFEPostIds().find(
    (item) => item.params.id === id
  )
    ? getFEPostData(id)
    : getOtherPostData(id));
  return {
    props: { postData },
  };
}

export default function Post({
  postData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

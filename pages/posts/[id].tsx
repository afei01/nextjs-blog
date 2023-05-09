import { GetStaticPaths, GetStaticProps } from "next";
import { getAllFEPostIds, getFEPostData } from "../../lib/frontEndPosts";
import { getAllOtherPostIds, getOtherPostData } from "../../lib/otherPosts";

import Date from "../../components/Date";
import Head from "next/head";
import Layout from "../../components/Layout";
import React from "react";
import utilStyles from "../../styles/utils.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [...getAllFEPostIds(), ...getAllOtherPostIds()];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const postData = await (getAllFEPostIds().find(
    (item) => item.params.id === id
  )
    ? getFEPostData(id)
    : getOtherPostData(id));
  return {
    props: { postData },
  };
};

export default function Post({
  postData,
}: {
  postData: { title: string; id: string; date: string; contentHtml: string };
}) {
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

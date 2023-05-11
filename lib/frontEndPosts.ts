import { Compatible } from "vfile";
import fs from "fs";
import html from "remark-html";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";

const postsDirectory = path.join(process.cwd(), "FE_posts");

export function getSortedFEPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents) as unknown as {
      data: { title: string; date: string };
    };

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllFEPostIds() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      // Remove ".md" from file name to get id
      id: fileName.replace(/\.md$/, ""),
    },
  }));
}

export async function getFEPostData(id: string) {
  // Read markdown file as string
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents) as unknown as {
    data: { title: string; date: string };
    content: Compatible;
  };

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    contentHtml,
    ...matterResult.data,
  };
}

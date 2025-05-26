import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = await getCollection("articles");
  return rss({
    title: "喵落阁",
    description: "克喵的博客",
    site: "https://blog-v1.kemeow.top",
    items: articles.map((article) => ({
      title: article.data.title,
      link: `/article/${article.slug}/`,
      guid: `/article/${article.slug}/`,
      author: article.data.author,
      description: article.data.description,
      pubDate: article.data.publishDate,
    })),
    customData: `<language>zh-CN</language>`,
  });
}

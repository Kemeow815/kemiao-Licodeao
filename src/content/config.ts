import { defineCollection, z } from "astro:content";

// 定义内容集合的验证规则，如 md 文件的 frontmatter
export const collections = {
  articles: defineCollection({
    type: "content",
    schema: z.object({
      author: z.string(),
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      categories: z.array(z.string()),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      site: z.string().optional(),
    }),
  }),
};

export const SITE = {
  website: "https://blog-v1.kemeow.top",
  author: "克喵爱吃卤面",
  desc: "愿你看清一切真相后，依旧热爱你的家人和朋友。",
  title: "喵落阁",
  avatar:
    "https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256",
};

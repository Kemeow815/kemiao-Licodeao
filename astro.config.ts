import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";
import sitemap from "@astrojs/sitemap";
import { remarkOssImagePlugin } from "./src/utils/remarkOssImagePlugin";

import react from "@astrojs/react";

const options = {
  theme: "one-dark-pro",
};

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), react()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, options]],
    remarkPlugins: [remarkOssImagePlugin],
  },
  site: "https://blog-v1.kemeow.top",
});
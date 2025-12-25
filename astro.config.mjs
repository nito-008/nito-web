import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rlc from "remark-link-card";

import expressiveCode from "astro-expressive-code";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://nito008.com/",
  redirects: {
    "/apps": "/works",
  },
  integrations: [
    expressiveCode({
      styleOverrides: {
        uiFontSize: "1.875rem",
        codeFontSize: "1.875rem",
        uiFontFamily: "'Zen Maru Gothic', monospace",
        uiPaddingBlock: "0.5rem",
        uiPaddingInline: "2rem",
        codeFontFamily: "'IBM Plex Mono', 'Zen Maru Gothic', monospace",
        codePaddingBlock: "1.5rem",
        codePaddingInline: "2rem",
        borderRadius: "8px",
      },
      themes: ["github-dark-dimmed"],
    }),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [
      [
        rlc,
        {
          cache: false,
        },
      ],
    ],
  },
});

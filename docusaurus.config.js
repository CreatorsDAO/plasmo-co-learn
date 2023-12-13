// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Plasmo-Co-Learn",
  tagline: "Build Browser Extension Is Very Easy!!",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https:///creatorsdao.github.io",

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/plasmo-co-learn",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  organizationName: "CreatorsDAO", // Usually your GitHub org/user name.
  projectName: "plasmo-co-learn", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this " links.
          editUrl:
            "https://github.com/CreatorsDAO/ppagelasmo-co-learn/tree/main",
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/CreatorsDAO/plasmo-co-learn/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Plasmo-Co-Learn",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",

            label: "Learn Plasmo Now",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            label: "Links",
            position: "right",
            items: [
              {
                href: "https://github.com/PlasmoHQ/examples",
                label: "Examples",
              },
              {
                href: "https://docs.plasmo.com/",
                label: "Plasmo Documents",
              },
            ],
          },
          {
            href: "https://github.com/CreatorsDAO/plasmo-co-learn",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CreatorsDAO, Inc. 706`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

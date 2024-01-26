// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "文档中心",
  tagline: "开放平台文档中心",
  url: "https://ekuaibao.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "ekuaibao", // Usually your GitHub org/user name.
  projectName: "open-platform-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ekuaibao/open-platform-docs/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/ekuaibao/open-platform-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "block-ui",
        path: "block-ui",
        routeBasePath: "block-ui",
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
      },
    ],
    "@docusaurus/plugin-ideal-image",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        id: "search-local",
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        // docsPluginIdForPreferredVersion: "v2.2",
        ignoreFiles: ["/docs/next/*","/docs/v2.0/*","/docs/v2.1/*"]
      },
    ],
  ],
  themes: ["@saucelabs/theme-github-codeblock"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "文档中心",
        logo: {
          alt: "开放平台文档中心 Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "open-api/getting-started/getting-started",
            activeBasePath: "open-api",
            position: "left",
            label: "Open API",
          },
          {
            to: "/block-ui/support",
            label: "开放UI",
            position: "left",
            activeBaseRegex: "/block-ui/",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "社区",
        //     items: [
        //       {
        //         label: "论坛",
        //         href: "https://github.com/ekuaibao/open-platform-docs/discussions",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/ekuaibao/open-platform-docs",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Open-Platform Team, Ekuaibao Inc. Built with Docusaurus.`,
      },
      prism: {
        // theme: prismThemes.github,
        // darkTheme:prismThemes.dracula,
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

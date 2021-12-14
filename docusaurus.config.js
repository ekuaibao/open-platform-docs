// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "文档中心",
  tagline: "开放平台文档中心",
  url: "https://ekuaibao.github.io/open-platform-docs/",
  baseUrl: "/open-platform-docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
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
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
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
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
      },
    ],
    "@docusaurus/plugin-ideal-image",
  ],
  themes: ["@saucelabs/theme-github-codeblock"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "文档中心",
        logo: {
          alt: "开放平台文档中心 Logo",
          src: "../img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "open-api/getting-started/getting-started",
            activeBasePath: 'open-api',
            position: "left",
            label: "Open API",
          },
          {
            to: "/community/support",
            label: "Block UI",
            position: "left",
            activeBaseRegex: "/community/",
          },
          { to: "/blog", label: "Blog", position: "left" },
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
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

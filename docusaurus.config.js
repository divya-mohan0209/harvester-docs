// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title:
    "The open source hyperconverged infrastructure (HCI) solution for a cloud native world",
  tagline: "",
  url: "https://docs.harvesterhci.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "harvester",
  projectName: "docs",

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/harvester/docs/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "Harvester Logo",
        src: "img/logo_horizontal.svg",
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: "right",
          label: "Docs",
          className: "navbar__docs",
        },
        {
          href: "https://www.suse.com/c/?s=harvester",
          position: "right",
          label: "Blog",
          className: "navbar__blog",
        },
        {
          href: "https://harvesterhci.io/kb",
          position: "right",
          label: "Knowledge Base",
          className: "navbar__kb",
        },
        {
          href: "https://github.com/harvester/harvester",
          label: "GitHub",
          position: "right",
          className: "navbar__github btn btn-secondary icon-github",
        },
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} harvesterhci.io`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  customFields: {
    title: "Harvester - Open-source hyperconverged infrastructure",
    description:
      "An open-source hyperconverged infrastructure (HCI) software for a cloud-native world",
  },
};

module.exports = config;
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  title: 'Black Dot',
  favicon: 'img/favicon.ico',
  url: 'https://black-dot-2024.github.io',
  projectName: 'docs',
  organizationName: 'Black-Dot-2024',
  trailingSlash: false,
  baseUrl: '/docs',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  onBrokenAnchors: 'log',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Black-Dot-2024/docs/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo-bd.png',

      navbar: {
        hideOnScroll: true,
        style: 'dark',
        title: 'Black Dot',
        logo: {
          alt: 'Black Dot Logo',
          src: 'img/svg-bd.svg',
        },
        items: [
          {
            href: 'https://github.com/Black-Dot-2024',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'light',
        copyright: `Copyright © 2024 Black Dot. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      // TODO: Add Algolia search with new link
      // algolia: {
      //   indexName: 'black-dot-2024io',
      //   appId: '6KWYVW3922',
      //   apiKey: '18b88590262a89cbb43440cd25c23c32',
      //   debug: false,
      //   contextualSearch: false,
      // },
    }),
};

export default config;

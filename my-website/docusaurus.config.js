// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Juan José Quiroz Omaña, Ph.D.',
  tagline: '',
  url: 'https://juanjqo.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/manipulator.png', 

  // GitHub pages deployment config. 
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'juanjqo', // Usually your GitHub org/user name.
  projectName: 'juanjqo.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/juanjqo/juanjqo',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/juanjqo/juanjqo',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        /**logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'About me',
          },
          {
            type: 'doc',
            docId: 'publications_id',
            position: 'left',
            label: 'Publications',
          },
          /**{
           to: '/blog',
           label: 'Blog',
           position: 'left'
          },*/
          {
            href: 'https://github.com/juanjqo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Profiles',
            items: [
              {
                label: 'Google Scholar',
                href: 'https://scholar.google.com/citations?user=anH1p78AAAAJ&hl=es',
              },
              {
                label: 'ORCID',
                href: 'https://orcid.org/0000-0002-0664-139X',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:juanjqo@g.ecc.u-tokyo.ac.jp'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/juanjqo',
              }
            ],
          },
          {
            title: 'More',
            items: [
             /* {
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/juanjqo',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Juan Jose Quiroz Omana. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  /* 
  scripts: [
      // String format.
      'https://docusaurus.io/script.js',
      // Object format.
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        async: true,
      },
    ], */ 
};

module.exports = config;

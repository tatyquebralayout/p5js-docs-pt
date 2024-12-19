import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'p5.js Brasil',
  tagline: 'Documentação brasileira do p5.js',
  favicon: 'img/favicon.ico',
  url: 'https://tatyquebralayout.github.io',
  baseUrl: '/p5js-docs-pt/',
  organizationName: 'tatyquebralayout',
  projectName: 'p5js-docs-pt',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/tatyquebralayout/p5js-docs-pt/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/tatyquebralayout/p5js-docs-pt/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'p5.js Brasil',
      logo: {
        alt: 'p5.js Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Referência',
          position: 'left',
          items: [
            {label: 'Formas', to: '/docs/referencia/formas'},
            {label: 'Cores', to: '/docs/referencia/cores'},
            {label: 'Tipografia', to: '/docs/referencia/tipografia'},
            {label: 'Imagem', to: '/docs/referencia/imagem'}
          ]
        },
        {
          to: '/docs/tutoriais',
          label: 'Tutoriais',
          position: 'left'
        },
        {
          to: '/docs/exemplos',
          label: 'Exemplos',
          position: 'left'
        },
        {
          href: 'https://github.com/tatyquebralayout/p5js-docs-pt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

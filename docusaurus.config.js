const { themes } = require('prism-react-renderer');

const config = {
  title: 'React UI Animate',
  tagline:
    'Create smooth animations and interactive gestures in React applications effortlessly 💻',
  url: 'https://www.react-ui-animate.js.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/react-ui-animate-logo.png',
  organizationName: 'dipeshrai123',
  projectName: 'react-ui-animate-docs',
  trailingSlash: false,
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Inter_18pt-Bold.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Inter_18pt-Medium.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Inter_18pt-Regular.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Inter_18pt-SemiBold.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: true,
          editUrl:
            'https://github.com/dipeshrai123/react-ui-animate-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    prism: {
      theme: themes.vsLight,
      darkTheme: themes.vsDark,
    },
    navbar: {
      title: 'React UI Animate',
      logo: {
        alt: 'React UI Animate Logo',
        src: 'img/react-ui-animate-logo.png',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'getting-started',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {
          type: 'docsVersionDropdown',
          dropdownActiveClassDisabled: true,
          position: 'right',
        },
        {
          href: 'https://github.com/dipeshrai123/react-ui-animate',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
};

module.exports = config;

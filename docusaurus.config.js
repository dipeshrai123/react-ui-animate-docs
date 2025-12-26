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
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: 'static/fonts/Inter_18pt-Bold.ttf',
        as: 'font',
        type: 'font/ttf',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: 'static/fonts/Inter_18pt-Medium.ttf',
        as: 'font',
        type: 'font/ttf',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: 'static/fonts/Inter_18pt-Regular.ttf',
        as: 'font',
        type: 'font/ttf',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: 'static/fonts/Inter_18pt-SemiBold.ttf',
        as: 'font',
        type: 'font/ttf',
        crossorigin: 'anonymous',
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
        {
          type: 'docsVersionDropdown',
          dropdownActiveClassDisabled: true,
          position: 'right',
          disableNextVersion: true,
        },
        {
          href: 'https://github.com/dipeshrai123/react-ui-animate',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Get Started',
              to: '/docs/getting-started',
            },
            // {
            //   label: 'Core Concepts',
            //   to: '/docs/concept/animate-component',
            // },
            {
              label: 'Animation Modifiers',
              to: '/docs/animation-modifier/overview',
            },
            {
              label: 'Gestures',
              to: '/docs/gesture/overview',
            },
          ],
        },
        // {
        //   title: 'Features',
        //   items: [
        //     {
        //       label: 'Interactive Props',
        //       to: '/docs/interactive/hover-animations',
        //     },
        //     {
        //       label: 'Presence & Exit',
        //       to: '/docs/presence/presence-basics',
        //     },
        //     {
        //       label: 'Hooks',
        //       to: '/docs/hooks/useInView',
        //     },
        //     {
        //       label: 'View Animations',
        //       to: '/docs/interactive/view-animations',
        //     },
        //   ],
        // },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dipeshrai123/react-ui-animate',
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/package/react-ui-animate',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React UI Animate. Built with ❤️ by Dipesh Rai.`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
};

module.exports = config;

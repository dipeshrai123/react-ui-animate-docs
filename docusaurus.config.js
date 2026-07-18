const { themes } = require('prism-react-renderer');
const webpack = require('webpack');
const path = require('path');

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
  customFields: {
    version: '5.3.2',
  },
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
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;600;700;800&display=swap',
      },
    },
  ],
  plugins: [
    // Live demos under src/examples/5.3.2/** need to run against the actual
    // 5.3.2 build (not whatever `react-ui-animate` currently means, which
    // tracks `next`), so their `import ... from 'react-ui-animate'` gets
    // rewritten at bundle time to the aliased `react-ui-animate-stable`
    // package (see package.json). Examples under src/examples/next/**
    // resolve `react-ui-animate` normally, since that's pinned to next.
    function reactUiAnimateVersionAlias() {
      return {
        name: 'react-ui-animate-version-alias',
        configureWebpack() {
          return {
            plugins: [
              new webpack.NormalModuleReplacementPlugin(
                /^react-ui-animate$/,
                (resource) => {
                  const importer = (resource.context || '').split(path.sep).join('/');
                  if (importer.includes('/src/examples/5.3.2/')) {
                    resource.request = 'react-ui-animate-stable';
                  }
                }
              ),
            ],
          };
        },
      };
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
          lastVersion: '5.3.2',
          versions: {
            current: {
              label: '5.4.0-next.2',
              path: 'next',
            },
            '5.3.2': {
              label: '5.3.2',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: themes.vsDark,
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
};

module.exports = config;

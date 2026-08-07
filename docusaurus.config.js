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
    version: '6.0.0',
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
    // Live demos under src/examples/<version>/** for a *released, versioned*
    // doc (5.3.2, 6.0.0) need to keep running against that exact build,
    // regardless of what `react-ui-animate` currently means (it tracks
    // whatever `next` docs are being developed against). So their
    // `import ... from 'react-ui-animate'` gets rewritten at bundle time to
    // the matching pinned alias package (see package.json). Examples under
    // src/examples/next/** resolve `react-ui-animate` normally.
    function reactUiAnimateVersionAlias() {
      const versionAliases = {
        '/src/examples/5.3.2/': 'react-ui-animate-stable',
        '/src/examples/6.0.0/': 'react-ui-animate-6.0.0',
      };
      return {
        name: 'react-ui-animate-version-alias',
        configureWebpack() {
          return {
            plugins: [
              new webpack.NormalModuleReplacementPlugin(
                /^react-ui-animate$/,
                (resource) => {
                  const importer = (resource.context || '').split(path.sep).join('/');
                  const aliasEntry = Object.entries(versionAliases).find(([dir]) =>
                    importer.includes(dir)
                  );
                  if (aliasEntry) {
                    resource.request = aliasEntry[1];
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
          lastVersion: '6.0.0',
          versions: {
            current: {
              label: 'next',
              path: 'next',
            },
            '6.0.0': {
              label: '6.0.0',
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
            {
              label: 'Animation Modifiers',
              to: '/docs/animation-modifier/overview',
            },
            {
              label: 'Gestures',
              to: '/docs/gesture/overview',
            },
            {
              label: 'Unmount & Flip',
              to: '/docs/presence/presence-basics',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dipeshrai123/react-ui-animate',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/qPqsD8pv',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/react-ui-animate',
            },
            {
              label: 'Releases',
              href: 'https://github.com/dipeshrai123/react-ui-animate/releases',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React UI Animate. Built by Dipesh Rai.`,
    },
  },
};

module.exports = config;

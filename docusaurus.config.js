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
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsed: false,
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'React UI Animate',
      logo: {
        alt: 'React UI Animate Logo',
        src: 'img/react-ui-animate-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Docs',
        },
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
          title: 'Learn',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dipeshrai123/react-ui-animate',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, React UI Animate`,
    },
  },
};

module.exports = config;

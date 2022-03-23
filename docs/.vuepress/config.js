module.exports = {
  title: 'Mediumish',
  base: '/',
  dest: 'public',
  description: 'Mediumish theme with VuePress and Forestry',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'KC',
      avatar: '/assets/img/KC.png',
      link: 'https://twitter.com/kc10_nft',
      linktext: 'Twitter',
      },
      {
        name: 'Luke',
        avatar: '/assets/img/luke.png',
        link: 'https://twitter.com/itslukerare',
        linktext: 'Twitter',
      },
      {
        name: 'Fab',
        avatar: '/assets/img/fab.png',
        link: 'https://twitter.com/FabulousDeFi',
        linktext: 'Twitter',
      },
    ],
    footer: {
      contact: [
        {
          type: 'messenger',
          link: 'https://t.me/pixelsweeper',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/pixelsweeper',
        },
        {
          type: 'web',
          link: 'https://pixelsweeper.com',
        }
      ],
      copyright: [
        {
          text: 'Copyright 2022 — PixelSweeper',
          link: 'https://pixelsweeper.com',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/thecryptoneer/pixelsweeper-blog/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: ''
    },
    feed: {
      canonical_base: 'https://github.com/thecryptoneer/pixelsweeper-blog/',
    },
    smoothScroll: true
  },
}

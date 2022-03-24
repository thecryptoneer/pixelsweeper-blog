module.exports = {
  title: 'PixelSweeper',
  base: '/',
  dest: 'public',
  description: 'PixelSweeper is a 3D art utility NFT collection on the BNB Chain. We are sweeping the floor of BNB Chain NFT collections.',
  logo: './assets/img/pixelsweeper-logo.png',
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
      {
        name: 'The Cryptoneer',
        avatar: '/assets/img/cryptoneer.png',
        link: 'https://twitter.com/thecryptoneer',
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

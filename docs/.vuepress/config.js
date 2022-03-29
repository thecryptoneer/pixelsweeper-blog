module.exports = {
  title: 'PixelSweeper',
  base: '/',
  dest: 'public',
  description: 'We\'re a collection of 10,000 robots, who are busy sweeping the floor on BNBChain and redistributing the swept NFTs back to PixelSweeper holders.',
  logo: './assets/img/pixelsweeper-logo.png',
  header_logo: './assets/img/pixelsweeper-logo-text.png',
  theme: require.resolve('../../'),
  head: [
    ['link', { rel: 'icon', href: './assets/img/pixelsweeper-logo.png' }]
  ],
  themeConfig: {
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
    feed: {
      canonical_base: 'https://github.com/thecryptoneer/pixelsweeper-blog/',
    },
    smoothScroll: true
  },
}

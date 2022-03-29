module.exports = {
  title: 'PixelSweeper',
  base: '/',
  favicon: './assets/img/pixelsweeper-logo.png',
  dest: 'public',
  description: 'PixelSweeper is a 3D art utility NFT collection on the BNB Chain. We are sweeping the floor of BNB Chain NFT collections.',
  logo: './assets/img/pixelsweeper-logo.png',
  header_logo: './assets/img/pixelsweeper-logo-text.png',
  theme: require.resolve('../../'),
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

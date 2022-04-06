const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)
// Customize the value to your timezone (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
dayjs.tz.setDefault('Europe/Berlin')

module.exports = (options = {}, ctx) => ({
  extendPageData($page) {
    const { frontmatter, path } = $page

    const metadata = {
      title: frontmatter.title
        ? frontmatter.title.toString().replace(/["|'|\\]/g, '')
        : $page.title
          ? $page.title.toString().replace(/["|'|\\]/g, '')
          : null,
      description: frontmatter.link_preview_description
        ? frontmatter.link_preview_description.toString().replace(/'/g, "'").replace(/["|\\]/g, '')
        : frontmatter.description
          ? frontmatter.description.toString().replace(/'/g, "'").replace(/["|\\]/g, '')
          : null,
      url:
        frontmatter.canonicalUrl && typeof frontmatter.canonicalUrl === 'string'
          ? frontmatter.canonicalUrl.startsWith('http') ? frontmatter.canonicalUrl
          : ctx.siteConfig.themeConfig.domain + frontmatter.canonicalUrl
          : null,
      image:
        frontmatter.link_preview_img && typeof frontmatter.link_preview_img === 'string' ?
          frontmatter.link_preview_img.startsWith('http') ? frontmatter.link_preview_img
            : ctx.siteConfig.themeConfig.domain + frontmatter.link_preview_img : null,
      type: meta_isArticle(path) ? 'article' : 'website',
      siteName: ctx.siteConfig.title || null,
      siteLogo: ctx.siteConfig.themeConfig.logo || null,
    }

    let meta_dynamicMeta = [
      // General meta tags
      { name: 'description', content: metadata.description },
      { name: 'keywords', content: frontmatter.tags && frontmatter.tags.length ? frontmatter.tags.join(', ') : null },
      { itemprop: 'name', content: metadata.title },
      { itemprop: 'description', content: metadata.description },
      { itemprop: 'image', content: metadata.image ? metadata.image : null },
      // Open Graph
      { property: 'og:url', content: metadata.url },
      { property: 'og:type', content: metadata.type },
      { property: 'og:title', content: metadata.title },
      { property: 'og:image', content: metadata.image ? metadata.image : null },
      { property: 'og:image:type', content: metadata.image && meta_getImageMimeType(metadata.image) ? meta_getImageMimeType(metadata.image) : null },
      { property: 'og:image:alt', content: metadata.image ? metadata.title : null },
      { property: 'og:description', content: metadata.description },

      // Twitter Cards
      { property: 'twitter:url', content: metadata.url },
      { property: 'twitter:title', content: metadata.title },
      { property: 'twitter:description', content: metadata.description },
      { property: 'twitter:image', content: metadata.image ? metadata.image : null },
      { property: 'twitter:image:alt', content: metadata.title },
    ]

    // Remove tags with empty content values
    meta_dynamicMeta = meta_dynamicMeta.filter((meta) => meta.content && meta.content !== '')

    // Combine frontmatter
    meta_dynamicMeta = [...(frontmatter.meta || []), ...meta_dynamicMeta]

    // Set frontmatter after removing duplicate entries
    meta_dynamicMeta = getUniqueArray(meta_dynamicMeta, ['name', 'content', 'itemprop', 'property'])

    frontmatter.meta = meta_dynamicMeta
  },
})

/**
 * Removes duplicate objects from an Array of JavaScript objects
 * @param {Array} arr Array of Objects
 * @param {Array} keyProps Array of keys to determine uniqueness
 */
function getUniqueArray(arr, keyProps) {
  return Object.values(
    arr.reduce((uniqueMap, entry) => {
      const key = keyProps.map((k) => entry[k]).join('|')
      if (!(key in uniqueMap)) uniqueMap[key] = entry
      return uniqueMap
    }, {}),
  )
}

/**
 * Returns boolean indicating if page is a blog post
 * @param {String} path Page path
 */
function meta_isArticle(path) {
  // Include path(s) where blog posts/articles are contained
  return ['articles', 'posts', '_posts', 'blog'].some((folder) => {
    let regex = new RegExp('^\\/' + folder + '\\/([\\w|-])+', 'gi')
    // Customize /category/ and /tag/ (or other sub-paths) below to exclude, if needed
    return regex.test(path) && path.indexOf(folder + '/category/') === -1 && path.indexOf(folder + '/tag/') === -1
  })
    ? true
    : false
}

/**
 * Returns the meme type of an image, based on the extension
 * @param {String} img Image path
 */
function meta_getImageMimeType(img) {
  if (!img) {
    return null
  }
  const regex = /\.([0-9a-z]+)(?:[\?#]|$)/i
  if (Array.isArray(img.match(regex)) && ['png', 'jpg', 'jpeg', 'gif'].some((ext) => img.match(regex)[1] === ext)) {
    return 'image/' + img.match(regex)[1]
  } else {
    return null
  }
}

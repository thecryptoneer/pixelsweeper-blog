<template>
  <div id="">
    <!-- SPWP GUDE -->
    <div v-for="type of displayed_categories" :key="type">
      <div
        v-if="
          (type !== 'archive' || (type === 'archive' && showArchive)) &&
          categoryPages(type).length
        "
        class="profile-headline-container-centered font-container"
      >
        <p
          class="categoryHeadline font-inlay headline-centered profile-headline"
        >
          <span v-if="type === 'swpr-guide'" class="swpr-guide-font-inlay">
            {{ getHeadline(type) }}
          </span>
          <span v-if="type === 'bonnies-news'" class="swpr-guide-font-inlay">
            {{ getHeadline(type) }}
          </span>
          <span v-if="type === 'overview'" class="overview-font-inlay">
            {{ getHeadline(type) }}
          </span>
          <span v-if="type === 'faq'" class="faq-font-inlay">
            {{ getHeadline(type) }}
          </span>
          <span v-if="type === 'integrations'" class="faq-font-inlay">
            {{ getHeadline(type) }}
          </span>
          <span v-if="type === 'archive'" class="archive-font-inlay">
            {{ getHeadline(type) }}
          </span>
        </p>

        <p
          class="categoryHeadline font-overlay font-background headline-centered profile-headline"
        >
          <span v-if="type === 'swpr-guide'" class="swpr-guide-font-overlay">
            {{ getHeadline(type) }}
          </span>
          <span v-if="type === 'overview'" class="overview-font-overlay">
            {{ getHeadline(type) }}
          </span>
          <span v-if="type === 'faq'" class="faq-font-overlay">
            {{ getHeadline(type) }}
          </span>
          <span v-if="type === 'integrations'" class="faq-font-overlay">
            {{ getHeadline(type) }}
          </span>
          <span v-if="type === 'archive'" class="archive-font-overlay">
            {{ getHeadline(type) }}
          </span>
        </p>
      </div>

      <div
        v-if="type !== 'archive' || (type === 'archive' && showArchive)"
        class="card-panel-content row"
        itemscope
        itemtype="http://schema.org/Blog"
      >
        <article
          v-for="page in categoryPages(type)"
          :key="page.key"
          itemprop="blogPost"
          class="ui-post entry col-md-4 card-container"
          itemscope
          itemtype="https://schema.org/BlogPosting"
        >
          <meta itemprop="mainEntityOfPage" :content="page.path" />
          <div class="entry card h-100">
            <div class="card-header-image">
              <NavLink :link="page.path">
                <img :src="page.frontmatter.featuredimg" />
              </NavLink>
            </div>

            <div class="card-inside">
              <div class="card-subheading">
                <div
                  v-if="page.frontmatter.tags"
                  class="ui-post-meta ui-post-tag"
                  itemprop="keywords"
                >
                  <router-link
                    v-for="tag in resolvePostTags(page.frontmatter.tags)"
                    :key="tag"
                    :to="'/tag/' + tag"
                  >
                    {{ tag }}
                  </router-link>
                </div>
              </div>
              <h2 class="heading" itemprop="name headline">
                <NavLink :link="page.path" class="heading">
                  {{ page.title }}
                </NavLink>
              </h2>
              <p class="limitText" itemprop="description">
                {{ page.frontmatter.summary || page.summary }}
              </p>
            </div>
            <div class="meta-bottom mt-auto">
              <div v-if="$themeConfig.authors">
                <span
                  v-for="author in $themeConfig.authors"
                  :key="author.name"
                  class="nav-item"
                >
                  <div class="d-flex">
                    <a class="profile-avatar">
                      <img
                        v-if="author.name === page.frontmatter.author"
                        :src="$withBase(author.avatar)"
                        class="avatar-image"
                        :alt="author.name"
                      />
                    </a>
                    <div class="meta">
                      <div v-if="author.name === page.frontmatter.author">
                        <span class="username">{{ author.name }}</span> &nbsp;
                      </div>
                      <div></div>
                    </div>
                  </div>
                </span>
              </div>

              <div v-if="page.frontmatter.date" class="date">
                <time
                  pubdate
                  itemprop="datePublished"
                  :datetime="page.frontmatter.date"
                >
                  {{ resolvePostDate(page.frontmatter.date) }}
                </time>
              </div>
            </div>
          </div>
        </article>
      </div>

      <p
        v-if="type === 'archive' && categoryPages(type).length"
        class="archive-disclaimer"
      >
        We have some more articles saved in our archives. Click
        <span class="highlight" @click="toggleArchive()"> here</span>
        to {{ showArchive ? 'hide' : 'show' }} them.
      </p>
    </div>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import dayjs from 'dayjs'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

export default {
  data() {
    // console.log({ siteData: Vue.$vuepress.$get('siteData') })
    return {
      pages: [],
      displayed_categories: [
        'swpr-guide',
        'bonnies-news',
        'overview',
        'faq',
        'integrations',
        'archive',
      ],
      paginationSwprGuide: null,
      paginationOverview: null,
      paginationFaq: null,
      showArchive: false,
    }
  },

  computed: {
    // computed values
  },

  errorCaptured(err) {
    // console.log('errorCaptured', err)
  },
  mounted() {
    // console.log('mounted')
  },
  updated() {
    // console.log('updated')
  },

  created() {
    let pages = this.$site.pages
    pages = pages.map((page, i) => {
      return JSON.parse(JSON.stringify(page))
    })
    this.pages = pages
  },

  methods: {
    getNext() {
      // console.log('getNext')
    },
    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },
    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
    categoryPages(type) {
      const filteredPages = this.$data.pages.filter((page) => {
        if (page?.frontmatter?.category === type) {
          return page
        }
      })
      // console.log({ type, filteredPages })
      return filteredPages
    },
    toggleArchive() {
      this.showArchive = !this.showArchive
      // console.log({ showArchive: this.showArchive })
    },
    getHeadline(type) {
      switch (type) {
        case 'swpr-guide': {
          return 'SWPR Guide'
        }
        case 'bonnies-news': {
          return "Bonnie's Weekly News"
        }
        case 'overview': {
          return 'Overview'
        }
        case 'faq': {
          return 'FAQ'
        }
        case 'archive': {
          return 'Archive'
        }
        case 'integrations': {
          return 'Integrations'
        }
        default:
          return type
      }
    },
  },
}
</script>

<style lang="stylus">
.pagination > li > a, .pagination > li > span
  border: 0;
  border-bottom: 1px solid #ddd
  font-size: 15px
  font-weight: 700

.pagination > li:last-child > a, .pagination > li:last-child > span, .pagination > li:first-child > a, .pagination > li:first-child > span
  border-radius: 0

.pagination > li > a, .pagination > li > span
  color: inherit
  background: none

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus
  background: none
  border-bottom: 1px solid
  color: $accentColor

.date
  margin-left: 0px;
  margin-top: -20px;

.username
  margin-top: -10px;

.limitText
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
.heading
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
.highlight
  cursor: pointer;
  color: $accentColor;
.highlight:hover
  text-decoration: underline;
.archive-disclaimer {
  margin: 32px 0 0 0;
  text-align: center;
}
.profile-headline-container-centered {
  margin: 32px auto 32px auto;
  z-index: 400;
  width: 100%;
}
.font-container {
  position: relative;
  /*min-width: 520px;*/
  margin: 24px auto 0 auto;
  min-height: 80px;
  z-index: 400;
}
.font-overlay {
  position: absolute;
}

.font-background {
  font-family: 'Boom Boom Shadow'!important;
  color: #000 !important;
  font-weight: 100!important;
  /*color: #fff !important*/
  z-index: 401;
}
.font-inlay {
  font-family: 'Boom Boom'!important;
  color: #fff !important;
  z-index: 400;
  position absolute;
  /*color: transparent !important;*/
}
.categoryHeadline {
  font-size: 50px;
}
.pink {
  color: $accentColor;
}
.blue {
  color: $neonBlue;
}


.swpr-guide-font-overlay {
  color: #000;
}
.swpr-guide-font-inlay {
  color: $accentColor;
}


.overview-font-overlay {
  //color: $neonBlueBorder;
  color: #000;
}
.overview-font-inlay {
  color: $neonBlue;
}


.faq-font-overlay {
  color: $accentColor;
}
.faq-font-inlay {
  color: transparent;
}


.archive-font-overlay {
  //color: $neonBlueBorder;
  color: #000;
}
.archive-font-inlay {
  color: $neonBlue;
}
</style>

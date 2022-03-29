<template>
  <div id="mobile-header">
    <div class="mobile-header-bar">
      <div class="mobile-header-title">
        <NavLink link="/" class="mobile-home-link navbar-brand"
          ><img :src="$withBase($themeConfig.header_logo)"
        /></NavLink>
        <component
          :is="isOpen ? 'XIcon' : 'MenuIcon'"
          @click="$emit('toggle-sidebar')"
        />
      </div>
      <div class="mobile-menu-wrapper" :class="{ open: isOpen }">
        <ul v-if="$themeConfig.nav" class="mobile-nav">
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper.com/#home">HOME</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper.com/#about">ABOUT</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper.com/#mint">MINT</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper.com/#whitelist">WHITELIST</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper.com/#roadmap">ROADMAP</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper.com/#team">TEAM</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper.com/#social">SOCIAL</a>
          </li>

          <li
            v-for="item in $themeConfig.nav"
            :key="item.text"
            class="mobile-nav-item blog"
          >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
          <!--<li class="mobile-nav-item">-->
          <!--  <Feed />-->
          <!--</li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'
import Feed from './Feed'
export default {
  components: {
    MenuIcon,
    XIcon,
    Feed,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="stylus">
.mobile-header-bar
  z-index 12
  position fixed
  top 0
  width 100vw
  box-sizing border-box
  background-color rgba(0,0,0,.3)
  margin auto
  box-shadow 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05)
  transition all 1s cubic-bezier(0.25, 0.8, 0.25, 1)

#mobile-header
  .mobile-header-title
    display flex
    align-items center
    justify-content space-between
    padding 1.2em

    .mobile-home-link
      text-decoration none
      color inherit

.mobile-nav-item
  padding 0
  list-style none
  display flex
  flex-direction row
  justify-content center
  align-items center

  a
    color: #fff;
    padding: 10px 20px;
    font-weight: 300;
    font-size: 40px;
    margin: 0;
    line-height: 1.2;
    cursor: pointer;
    transition: all .3s ease;
    font-family: Boom Boom Shadow,Arial,"sans-serif";

.blog
  margin-top 32px

  a
    color #CB93B3!important


.mobile-nav
  padding-left 0!important

.menu-divider
  margin 0

.mobile-menu-wrapper
  max-height 0
  overflow hidden
  transition 0.3s ease
  background-color #151415

.mobile-menu-wrapper.open
  min-height: 100vh
  transition: 0.3s ease
  padding: 10vh 0 0 0
  font-family: Arial
  font-weight: 600

@media (min-width: $MQMobile)
  #mobile-header
    display none
</style>

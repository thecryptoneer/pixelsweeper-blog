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
          <li
            v-for="item in $themeConfig.nav"
            :key="item.text"
            class="mobile-nav-item"
          >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper-alpha.vercel.app/#home">HOME</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper-alpha.vercel.app/#about">ABOUT</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper-alpha.vercel.app/#mint">MINT</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper-alpha.vercel.app/#whitelist"
              >WHITELIST</a
            >
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper-alpha.vercel.app/#roadmap">ROADMAP</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper-alpha.vercel.app/#team">TEAM</a>
          </li>
          <li class="mobile-nav-item">
            <a href="https://pixelsweeper-alpha.vercel.app/#social">SOCIAL</a>
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
  padding 10px 0
  list-style none
  display flex
  flex-direction row
  justify-content center
  align-items center

  a
    text-decoration none
    color: #fff!important
    font-size 30px
    text-transform uppercase;

.mobile-nav
  padding-left 0!important

.menu-divider
  margin 0

.mobile-menu-wrapper
  max-height 0
  overflow hidden
  transition 0.3s ease
  background-color rgba(0,0,0,1)

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

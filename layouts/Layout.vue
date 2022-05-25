<template>
  <div>
    <BaseListLayout v-if="$site.pages" />
    <Content v-else />
  </div>
</template>

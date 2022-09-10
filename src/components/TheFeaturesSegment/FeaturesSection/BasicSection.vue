<template>
  <div class="ui center aligned three column stackable relaxed padded grid">
    <FeatureItem
      v-for="featureData in features"
      :key="featureData.code"
      category="basic"
      :feature-data="featureData"
    />
  </div>
</template>

<script>
import FeatureItem from './FeatureItem.vue'

export default {
  name: 'BasicSection',
  components: {
    FeatureItem
  },
  data () {
    return {
      features: [
        {
          code: 'listen',
          icon: 'music'
        },
        {
          code: 'scrobble',
          icon: 'lastfm square'
        },
        {
          code: 'search',
          icon: 'search'
        },
        {
          code: 'radio',
          icon: 'broadcast tower'
        },
        {
          code: 'videos',
          icon: 'tv'
        },
        {
          code: 'lyrics',
          icon: 'file alternate'
        },
        {
          code: 'tags',
          icon: 'tag'
        },
        {
          code: 'charts',
          icon: 'arrow alternate circle up'
        },
        {
          code: 'releases',
          icon: 'record vinyl'
        },
        {
          code: 'multitag',
          icon: 'tags'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped></style>

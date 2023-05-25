<template>
  <div class="ui center aligned three column stackable doubling relaxed padded grid">
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
          code: 'search',
          icon: 'search'
        },
        {
          code: 'radio',
          icon: 'broadcast tower'
        },
        {
          code: 'videos',
          icon: 'film'
        },
        {
          code: 'lyrics',
          icon: 'file alternate outline'
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
          icon: 'compact disc'
        },
        {
          code: 'multitag',
          icon: 'tags'
        },
        {
          code: 'savedTracks',
          icon: 'save'
        },
        {
          code: 'customize',
          icon: 'palette'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped></style>

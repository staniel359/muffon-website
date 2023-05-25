<template>
  <div class="ui center aligned three column stackable doubling relaxed padded grid">
    <FeatureItem
      v-for="featureData in features"
      :key="featureData.code"
      category="personal"
      :feature-data="featureData"
    />
  </div>
</template>

<script>
import FeatureItem from './FeatureItem.vue'

export default {
  name: 'PersonalSection',
  components: {
    FeatureItem
  },
  data () {
    return {
      features: [
        {
          code: 'library',
          icon: 'headphones'
        },
        {
          code: 'recommendations',
          icon: 'bullhorn'
        },
        {
          code: 'scrobble',
          icon: 'lastfm'
        },
        {
          code: 'playlists',
          icon: 'file audio outline'
        },
        {
          code: 'favorites',
          icon: 'star'
        },
        {
          code: 'bookmarks',
          icon: 'bookmark'
        },
        {
          code: 'listened',
          icon: 'check'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped></style>

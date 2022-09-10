<template>
  <div class="ui center aligned three column stackable relaxed padded grid">
    <FeatureItem
      v-for="featureData in features"
      :key="featureData.code"
      category="social"
      :feature-data="featureData"
    />
  </div>
</template>

<script>
import FeatureItem from './FeatureItem.vue'

export default {
  name: 'SocialSection',
  components: {
    FeatureItem
  },
  data () {
    return {
      features: [
        {
          code: 'share',
          icon: 'share'
        },
        {
          code: 'post',
          icon: 'edit'
        },
        {
          code: 'follow',
          icon: 'user friends'
        },
        {
          code: 'message',
          icon: 'comments'
        },
        {
          code: 'feed',
          icon: 'newspaper'
        },
        {
          code: 'communities',
          icon: 'users'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped></style>

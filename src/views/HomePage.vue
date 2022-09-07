<template>
  <TheNavbar />

  <div class="ui inverted segments main-segments">
    <TheDownloadSegment />

    <TheServicesSegment />

    <TheFeaturesSegment />

    <TheFooterSegment />
  </div>
</template>

<script>
import TheNavbar from '*/components/TheNavbar.vue'
import TheDownloadSegment from '*/components/TheDownloadSegment.vue'
import TheServicesSegment from '*/components/TheServicesSegment.vue'
import TheFeaturesSegment from '*/components/TheFeaturesSegment.vue'
import TheFooterSegment from '*/components/TheFooterSegment.vue'

export default {
  name: 'HomePage',
  components: {
    TheNavbar,
    TheDownloadSegment,
    TheServicesSegment,
    TheFeaturesSegment,
    TheFooterSegment
  }
}
</script>

<style lang="sass" scoped></style>

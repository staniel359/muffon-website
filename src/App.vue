<template>
  <TheNavbar />

  <div class="ui segments main-segments">
    <TheTopSegment />

    <TheDescriptionSegment />

    <TheServicesSegment />

    <TheFeaturesSegment />

    <TheExtraFeaturesSegment />

    <TheDownloadSegment />

    <TheFooterSegment />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheTopSegment from '@/components/TheTopSegment.vue'
import TheDescriptionSegment from '@/components/TheDescriptionSegment.vue'
import TheServicesSegment from '@/components/TheServicesSegment.vue'
import TheFeaturesSegment from '@/components/TheFeaturesSegment.vue'
import TheExtraFeaturesSegment from '@/components/TheExtraFeaturesSegment.vue'
import TheDownloadSegment from '@/components/TheDownloadSegment.vue'
import TheFooterSegment from '@/components/TheFooterSegment.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheTopSegment,
    TheDescriptionSegment,
    TheServicesSegment,
    TheFeaturesSegment,
    TheExtraFeaturesSegment,
    TheDownloadSegment,
    TheFooterSegment
  }
}
</script>

<style lang="sass" scoped></style>

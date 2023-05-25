<template>
  <div class="ui segment main-segment">
    <div class="ui container main-container services-container">
      <HeaderSection />

      <div class="ui massive labels">
        <ServiceLabel
          v-for="serviceData in services"
          :key="serviceData.code"
          :service-data="serviceData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from './TheServicesSegment/HeaderSection.vue'
import ServiceLabel from './TheServicesSegment/ServiceLabel.vue'

export default {
  name: 'TheServicesSegment',
  components: {
    HeaderSection,
    ServiceLabel
  },
  data () {
    return {
      services: [
        {
          code: 'lastfm',
          name: 'Last.FM'
        },
        {
          code: 'vk',
          name: 'VK'
        },
        {
          code: 'odnoklassniki',
          name: 'Odnoklassniki'
        },
        {
          code: 'yandexmusic',
          name: 'Yandex Music'
        },
        {
          code: 'bandcamp',
          name: 'Bandcamp'
        },
        {
          code: 'deezer',
          name: 'Deezer'
        },
        {
          code: 'soundcloud',
          name: 'SoundCloud'
        },
        {
          code: 'spotify',
          name: 'Spotify'
        },
        {
          code: 'youtube',
          name: 'YouTube'
        },
        {
          code: 'discogs',
          name: 'Discogs'
        },
        {
          code: 'genius',
          name: 'Genius'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.services-container
  display: flex !important
  flex-direction: column
  align-items: center
</style>

<template>
  <div
    ref="segment"
    class="ui segment main-segment"
  >
    <div class="ui container main-container services-container">
      <HeaderSection />

      <div class="ui massive labels">
        <ServiceLabel
          v-for="serviceData in streamingServices"
          :key="serviceData.code"
          :service-data="serviceData"
        />
      </div>

      <div class="ui massive labels">
        <ServiceLabel
          v-for="serviceData in otherServices"
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
      streamingServices: [
        {
          code: 'bandcamp',
          name: 'Bandcamp'
        },
        {
          code: 'odnoklassniki',
          name: 'Odnoklassniki'
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
          code: 'vk',
          name: 'VK'
        },
        {
          code: 'yandexmusic',
          name: 'Yandex Music'
        },
        {
          code: 'youtubemusic',
          name: 'YouTube Music'
        }
      ],
      otherServices: [
        {
          code: 'discogs',
          name: 'Discogs'
        },
        {
          code: 'genius',
          name: 'Genius'
        },
        {
          code: 'lastfm',
          name: 'Last.FM'
        },
        {
          code: 'musicbrainz',
          name: 'MusicBrainz'
        },
        {
          code: 'musixmatch',
          name: 'MusixMatch'
        },
        {
          code: 'youtube',
          name: 'YouTube'
        }
      ]
    }
  },
  computed: {
    visibilityOptions () {
      return {
        onBottomVisible:
          this.handleBottomVisible
      }
    },
    transitionOptions () {
      return {
        animation: 'fade up',
        duration: 500,
        interval: 75
      }
    }
  },
  mounted () {
    $(
      this.$refs.segment
    ).visibility(
      this.visibilityOptions
    )
  },
  methods: {
    handleBottomVisible () {
      $(
        '.service-label'
      ).transition(
        this.transitionOptions
      )
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

<template>
  <div class="ui segment main-segment">
    <div class="ui container main-container services-container">
      <h1 class="ui inverted header main-header">
        {{ servicesText }}
      </h1>

      <div class="ui massive labels services-labels">
        <div
          v-for="serviceData in services"
          :key="serviceData.code"
          class="ui circular icon label service-label"
          :data-content="serviceData.name"
        >
          <i
            class="icon"
            :class="serviceData.code"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheServicesSegment',
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
  },
  computed: {
    servicesText () {
      return this.$t(
        'services'
      )
    }
  },
  mounted () {
    $(
      '.service-label'
    ).popup(
      {
        position: 'top center'
      }
    )
  }
}
</script>

<style lang="sass" scoped>
.services-container
  display: flex
  flex-direction: column
  align-items: center

.services-labels
  margin-top: 2em

.service-label
  background: white
</style>

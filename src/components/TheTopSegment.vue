<template>
  <div class="ui segment main-segment">
    <div class="ui container the-top-container">
      <div
        ref="leftSection"
        class="title-header-container"
      >
        <HeaderSection />

        <DownloadButton />
      </div>

      <div
        ref="rightSection"
        class="top-image-container"
      >
        <img
          class="ui image bordered"
          :src="topImage"
        >

        <button
          class="ui icon button basic circular dark-mode-toggle-button"
          @click="handleToggleButtonClick"
        >
          <i
            class="ui icon"
            :class="[
              toggleButtonClass
            ]"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from './TheTopSegment/HeaderSection.vue'
import DownloadButton from './TheTopSegment/DownloadButton.vue'
import imageLight from '@/assets/images/preview_light.png'
import imageDark from '@/assets/images/preview_dark.png'

export default {
  name: 'TheTopSegment',
  components: {
    HeaderSection,
    DownloadButton
  },
  data () {
    return {
      isDarkMode: false
    }
  },
  computed: {
    topImage () {
      return (
        this.isDarkMode ? imageDark : imageLight
      )
    },
    leftSectionTransitionOptions () {
      return {
        animation: 'fade right',
        duration: 750
      }
    },
    rightSectionTransitionOptions () {
      return {
        animation: 'fade up',
        duration: 750
      }
    },
    toggleButtonClass () {
      return (
        this.isDarkMode ? 'sun' : 'moon'
      )
    }
  },
  mounted () {
    $(
      this.$refs.leftSection
    ).transition(
      this.leftSectionTransitionOptions
    )

    $(
      this.$refs.rightSection
    ).transition(
      this.rightSectionTransitionOptions
    )
  },
  methods: {
    handleToggleButtonClick () {
      this.isDarkMode =
        !this.isDarkMode
    }
  }
}
</script>

<style lang="sass" scoped>
.the-top-container
  padding: 10em 5em 5em
  display: flex !important
  align-items: center
  height: 520px

.title-header-container
  visibility: hidden
  flex: 0.4
  text-align: right

.top-image-container
  position: relative
  visibility: hidden
  margin-left: 3em
  flex: 0.6

.dark-mode-toggle-button
  position: absolute
  top: 10px
  right: 10px
  background: white !important
</style>

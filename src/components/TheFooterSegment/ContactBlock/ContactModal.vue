<template>
  <div
    ref="modal"
    class="ui mini page modal"
  >
    <div class="content contact-links-container">
      <LinkItem
        v-for="(linkData, index) in links"
        :key="index"
        :link-data="linkData"
      />
    </div>
  </div>
</template>

<script>
import LinkItem from './ContactModal/LinkItem.vue'

export default {
  name: 'ContactModal',
  components: {
    LinkItem
  },
  data () {
    return {
      links: [
        {
          icon: 'envelope',
          link: 'mailto:staniel359@gmail.com',
          text: 'Email'
        },
        {
          icon: 'vk',
          link: 'https://vk.com/id223233444',
          text: 'VK'
        },
        {
          icon: 'facebook',
          link: 'https://www.facebook.com/profile.php?id=100076400978640',
          text: 'Facebook'
        }
      ]
    }
  },
  computed: {
    modalOptions () {
      return {
        duration: 300
      }
    }
  },
  mounted () {
    $(
      this.$refs.modal
    ).modal(
      this.modalOptions
    )
  },
  methods: {
    show () {
      $(
        this.$refs.modal
      ).modal(
        'show'
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.contact-links-container
  display: flex !important
  flex-direction: column
  align-items: center

::v-deep(.link-item)
  &:not(:first-child)
    margin-top: 1em
</style>

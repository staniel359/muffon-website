<template>
  <a
    class="ui primary circular button link-item"
    :href="link"
    target="_blank"
  >
    <i
      class="icon"
      :class="icon"
    />

    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'LinkItem',
  props: {
    linkData: {
      type: Object,
      required: true
    }
  },
  computed: {
    link () {
      return this.linkData.link
    },
    icon () {
      return this.linkData.icon
    },
    text () {
      return this.linkData.text
    }
  }
}
</script>

<style lang="sass" scoped></style>

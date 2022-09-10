<template>
  <div class="ui primary large buttons">
    <PrimaryButton
      :file-data="fileData"
      :systems="systems"
      :system-code="systemCode"
    />

    <ExtraButton
      :files-data="filesData"
      :systems="systems"
      :system-code="systemCode"
    />
  </div>
</template>

<script>
import PrimaryButton from './ButtonsBlock/PrimaryButton.vue'
import ExtraButton from './ButtonsBlock/ExtraButton.vue'

export default {
  name: 'ButtonsBlock',
  components: {
    PrimaryButton,
    ExtraButton
  },
  props: {
    filesData: Object,
    fileData: Object,
    systemCode: String
  },
  data () {
    return {
      systems: [
        {
          code: 'win',
          name: 'Windows',
          icon: 'windows'
        },
        {
          code: 'mac',
          name: 'MacOS',
          icon: 'apple'
        },
        {
          code: 'linux',
          name: 'Linux',
          icon: 'linux'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped></style>

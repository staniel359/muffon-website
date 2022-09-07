<template>
  <a
    class="icon item"
    :href="githubLink"
    target="_blank"
  >
    <i
      class="github large icon"
    />
  </a>
</template>

<script>
export default {
  name: 'GithubItem',
  data () {
    return {
      githubLink:
        'https://github.com/staniel359/muffon'
    }
  }
}
</script>

<style lang="sass" scoped></style>

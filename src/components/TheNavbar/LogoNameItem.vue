<template>
  <div class="item">
    <div class="logo-container">
      <img
        class="ui image"
        src="@/assets/images/logo.png"
      >
    </div>

    <div class="name-container">
      <h1 class="ui inverted header">
        muffon
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoNameItem'
}
</script>

<style lang="sass" scoped>
.logo-container
  width: 50px

.name-container
  margin-left: 1em
</style>

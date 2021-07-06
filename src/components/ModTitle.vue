<template>
  <p class="mod-title">{{ msg }}</p>
</template>

<script>
export default {
  name: "ModTitle",
  props: {
    msg: String
  },
  data() {
    return {
      value: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/widget/mod-title.scss";
</style>
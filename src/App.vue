<template>
  <div id="app">
    <div class="page-qq-baike">
      <MainContent />
      <BottomMenu :onClickShare="showShare" :words="msg" />
    </div>
  </div>
</template>

<script>
import MainContent from "./components/MainContent.vue";
import BottomMenu from "./components/BottomMenu.vue";

export default {
  name: "App",
  data() {
    return {
      showModal: false,
      msg: '测试'
    }
  },
  components: {
    MainContent,
    BottomMenu
  },
  methods: {
    showShare() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/css/font/font.scss";
@import "./assets/css/base/mixin.scss";
@import "./assets/css/pages/qq-baike.scss";
</style>
<template>
  <div id="app">
    <div class="page-qq-baike">
      <MainContent />
      <Videos />
      <Articles />
      <Footer />
      <BottomMenu :onClickShare="showShare" :words="msg" />
      <Modal v-if="showModal" :onCloseModal="closeModal" />
    </div>
  </div>
</template>

<script>
import MainContent from "./components/MainContent.vue";
import Videos from "./components/Videos.vue";
import Articles from "./components/Articles.vue";
import Footer from "./components/Footer.vue";
import BottomMenu from "./components/BottomMenu.vue";
import Modal from "./components/Modal.vue";

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
    Videos,
    Articles,
    Footer,
    BottomMenu,
    Modal
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
<template>
  <div class="modal">
    <div class="mask" @click="closeModal"></div>
    <div class="share-dialog">
      <div class="dialog_hd">
        <span>Maria's Diary</span>
        <i class="iconfont icon-close" @click="closeModal"></i>
      </div>
      <div class="dialog_bd">
        <div class="app-item">
          <i class="iconfont icon-wechat"></i>
          <span class="share-name">微信好友</span>
        </div>
      </div>
      <div class="dialog_ft">
        <div class="cancel">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    onCloseModal: {
      type: Function,
      default: () => []
    }
  },
  methods: {
    closeModal() {
      this.onCloseModal && this.onCloseModal();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/font/font";
@import "../assets/css/widget/mod-dialog";
</style>
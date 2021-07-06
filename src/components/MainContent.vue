<template>
  <div class="main bottomspace">
    <div class="main_hd">
      <img class="top-video-img" src="../assets/img/banner.jpg" />
    </div>
    <div class="main_bd">
      <p class="title">小玲玲的观音生活</p>
      <p class="author">小玲玲：伟大的摸鱼家、世界级FE工程师、小姐姐杀手</p>
      <p class="time">更新于 2021-07-04</p>
    </div>
    <div class="main_ft">
      <ModTitle msg="作者简介" />
      <p class="content">00后十大优秀小姐姐，擅于整理、写作、耍酷、口嗨、meme制作。喜欢吃价格稍微昂贵的甜食、包装良好的咖啡、重口味烧烤、火锅。</p>
    </div>
  </div>
</template>

<script>
import ModTitle from "./ModTitle.vue";

export default {
  name: "MainContent",
  components: {
    ModTitle
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/widget/main-content.scss";
</style>
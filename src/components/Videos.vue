<template>
  <div class="related-videos bottomspace">
    <ModTitle msg="相关视频" />
    <ul class="videos-items">
      <li class="videos-item" :class="{'leftspace': index}" v-for="(item, index) in items" :key="item.index">
        <img class="videos-item-img" :src="item.imgUrl" />
        <div class="videos-item-name">{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import ModTitle from "./ModTitle.vue";
import video1 from '../assets/img/video-1.jpg';
import video2 from '../assets/img/video-2.png';
import video3 from '../assets/img/video-3.jpg';
import video4 from '../assets/img/video-4.png';

export default {
  name: "Videos",
  components: {
    ModTitle
  },
  data() {
    return {
      items: [
        { id: 1, title: '怎么治疗湿疹', imgUrl: video1 },
        { id: 2, title: '怎么治疗湿疹', imgUrl: video2 },
        { id: 3, title: '怎么治疗湿疹', imgUrl: video3 },
        { id: 4, title: '怎么治疗湿疹', imgUrl: video4 }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/widget/mod-videos.scss";
</style>
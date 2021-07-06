<template>
  <div class="related-articles">
    <ModTitle msg="相关文章" />
    <ul class="article-items">
      <li class="article-item bottomline" v-for="piece in pieces" :key="piece.id">
        <div class="article-item_bd">
          <div class="article-title">{{ piece.title }}</div>
          <p class="article-author">{{ piece.author }}</p>
        </div>
        <div class="article-item_ft" v-if="piece.imgUrl">
          <img class="article-item-img" :src="piece.imgUrl" />
        </div>
      </li>
    </ul>
    <div class="show-more">
      <a>查看更多</a>
      <i class="iconfont icon-arrow"></i>
    </div>
  </div>
</template>

<script>
import ModTitle from "../components/ModTitle.vue";
import pieceImg1 from '../assets/img/article-1.png';
import pieceImg2 from '../assets/img/article-2.png';

export default {
  name: "Articles",
  components: {
    ModTitle
  },
  data() {
    return {
      pieces: [
        { id: 1, title: '冠心病常用的六类药，有什么作用和副作用？', author: '腾讯医典  医学编辑组', imgUrl: pieceImg1 },
        { id: 2, title: '调脂药（他汀等）怎么用？调脂药（他汀等）怎么用？调脂药（他汀等）怎么用？调脂药（他汀等）怎么用？', author: '腾讯医典  医学编辑组', imgUrl: false },
        { id: 3, title: 'RAAS抑制剂（药名常带“普利”、“沙坦”）怎么用？', author: '腾讯医典  医学编辑组', imgUrl: pieceImg2 }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/font/font";
@import "../assets/css/widget/mod-articles";
</style>
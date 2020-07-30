<template>
  <div id="homeswiper">
    <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imgload" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [
          { "link": "", "image": "" },
          { "link": "", "image": "" },
          { "link": "", "image": "" },
          { "link": "", "image": "" }
        ];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imgload() {
      if (!this.isLoad) {
        this.$emit("swiperimgload");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
</style>

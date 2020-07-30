<template>
  <div id='detailswiper'>
      <swiper>
          <swiper-item class="detail-swiper-item" v-for="(item,index) in topImages" :key="index">
              <img :src="item" @load="swiperimg"/>
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: 'Detailswiper',
  props:{
      topImages:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
      Swiper, 
      SwiperItem
  },
  data() {
    return {

    }
  },
  methods:{
      swiperimg(){
          this.$emit("swiperimg");
      }
  }
}
</script>

<style scoped>
.detail-swiper-item img{
    height: 300px;
    /* width: 100%; */
    overflow: hidden;
}
</style>

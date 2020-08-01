<template>
  <div id="cart-list">
    <scroll class="content" ref="scroll">
      <div v-if="Object.keys(cartList).length !== 0">
        <cart-list-item
          v-for="(item,index) in cartList"
          :key="index"
          :cart-item="item"
          @cartImgload="cartImgload"
        ></cart-list-item>
      </div>
      <div v-else>
        <van-empty description="购物车空空如也" :image="image"> 
          <van-button round type="danger" class="bottom-button" @click="backClick">去逛一逛</van-button>
        </van-empty>
      </div>
      <!-- <div class="recomment">推荐</div> -->
      <van-divider  class="recomment">推荐</van-divider>
      <goods-list :goodslist="recommendInfo" ref="goodslist"></goods-list>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mixin } from "common/tools/mixin.js";
import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem";
import GoodsList from "components/content/goodsList/GoodsList";

import { getRecommend } from "network/detail.js";

export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll,
    GoodsList,
  },
  data() {
    return {
      recommendInfo: [],
      image:require("@/assets/img/cart/emptycart.svg"),
    };
  },
  mixins: [mixin],
  created() {
    getRecommend().then((res) => {
      this.recommendInfo = res.data.list;
      // console.log(this.recommendInfo)
    });
  },
  activated() {
    this.$refs.scroll.refreshload();
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {
    cartImgload() {
      this.$refs.scroll.refreshload();
    },
    backClick(){
       this.$router.push("/home")
    }
    // cartClick(){
    //   console.log("选中")
    // }
  },
};
</script>

<style scoped>
#cart-list {
  height: calc(100% - 44px - 49px - 49px);
  /* overflow: hidden; */
}

.content {
  height: 100%;
  overflow: hidden;
}

.recomment {
  text-align: center;
  /* margin-top: 20px; */
  font-size: 20px;
  font-weight: 400;
  height: 40px;
  line-height: 40px;
}

.bottom-button {
    width: 160px;
    height: 40px;
    color:#fff;
    background-color: var(--color-high-text);
  }

</style>

<template>
  <div id="home">
    <!-- <van-skeleton title :row="3" v-show="isShowLoading" /> -->

    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- <van-nav-bar 
      title="购物街" class="home-nav"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ></van-nav-bar>-->
    <tab-contro
      class="tab-contro2"
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabref2"
      v-show="isFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :typeNum="3"
      @contentscroll="contentScroll"
      :pullup="true"
      @pullingupload="loadmore"
    >
      <home-swiper :banner="banner" @swiperimgload="swiperimgload" />
      <!-- <home-swiper/> -->
      <remcommend :recommend="recommend" />
      <feature />
      <tab-contro class="tab-contro" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabref" />
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComp/HomeSwiper";
import Remcommend from "./childComp/Remcommend";
import Feature from "./childComp/feature";

import TabContro from "components/content/TabContro";
// import GoodsList from "components/content/goodsList/GoodsList";
// import Scroll from "components/common/scroll/Scroll";
//import BackTop from "components/content/backTop/BackTop";

import { getHomeMultiData, getGooodsDetail } from "@/network/home";
import { debounce } from "common/tools/tools.js";
import { mixin, backTopMixin } from "common/tools/mixin.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Remcommend,
    Feature,
    //GoodsList,
    //BackTop,
    //Scroll,
    TabContro,
  },
  data() {
    return {
      //result:null,
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      taboffsetTop: 0,
      isFixed: false,
      saveY: 0,
      //isShowLoading: true,
    };
  },
  created() {
    this.getHomeMultiData();
    this.getGooodsDetail("pop");
    this.getGooodsDetail("new");
    this.getGooodsDetail("sell");
    //this.isShowLoading = false
  },
  mixins: [mixin, backTopMixin],
  mounted() {},
  activated() {
    this.$refs.scroll.scrollBack(0, this.saveY);
    this.$refs.scroll.refreshload();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    this.$bus.$off("imgload", this.itemimgload);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          break;
      }
      this.$refs.tabref.currentIndex = index;
      this.$refs.tabref2.currentIndex = index;

      this.$refs.scroll.scrollBack(0, -this.taboffsetTop);
      this.$refs.scroll.refreshload();
    },
    // backClick() {
    //   this.$refs.scroll.scrollBack(0, 0, 500);
    // },
    contentScroll(posititon) {
      // console.log(posititon);
      this.isShow = -posititon.y > 1000;

      this.isFixed = -posititon.y > this.taboffsetTop;
    },
    loadmore() {
      this.getGooodsDetail(this.currentType);
    },
    swiperimgload() {
      this.taboffsetTop = this.$refs.tabref.$el.offsetTop;
    },
    // onClickLeft() {
    //   Toast("返回");
    // },
    // onClickRight() {
    //   Toast("按钮");
    // },
    getGooodsDetail(type) {
      const page = this.goods[type].page + 1;
      getGooodsDetail(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.pullUpLoad();
      });
    },
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        //console.log(res.data.banner.list);
        //this.result=res.data;
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  background-color: var(--color-high-text);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* .tab-contro {
  position: sticky;
  top: 44px;
  z-index: 9;
} */

.content {
  /* height: calc(100% - 93px); */
  overflow: hidden;
  /* margin-top: 44px; */
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 55px;
}

.tab-contro2 {
  position: relative;
  /* left: 0;
  right: 0;
  top: 44px; */
  top: 44px;
  z-index: 9;
}
</style>

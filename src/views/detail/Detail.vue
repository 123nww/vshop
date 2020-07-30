<template>
  <div id="detail">
    <detail-nav-bar class="nav-var" @navBarClick="navBarClick" ref="navbar"></detail-nav-bar>

    <scroll class="content" ref="scroll" :type-num="3" @contentscroll="contentscroll">
      <detail-swiper :top-images="topImages" @swiperimg="swiperimg"></detail-swiper>
      <detail-base-info :goods="goods" @baseimgload="baseimgload"></detail-base-info>
      <detail-shop-info :shop="shop" @shopimgload="shopimgload"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageload="imageload"></detail-goods-info>
      <detail-params-info
        :detailparaminfo="detailparaminfo"
        @paramImgload="paramImgload"
        ref="paraminfo"
      ></detail-params-info>
      <detail-comment-info
        :detail-comment="detailComment"
        @commentimgload="commentimgload"
        ref="commentinfo"
      ></detail-comment-info>
      <!-- <div class="recomment" ref="goodslist">推荐</div> -->
       <van-divider  class="recomment" ref="goodslist">推荐</van-divider>
      <goods-list :goodslist="recommendInfo"></goods-list>
    </scroll>

    <detail-bottom-nav-bar
      @addCart="addCart"
      :skuData="skuData"
      :skued="sku"
      :goodsPictured="goodsPicture"
      :iid="iid"
      :skudetail="skudetail"
    ></detail-bottom-nav-bar>

    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
// import Scroll from "components/common/scroll/Scroll";
// import GoodsList from "components/content/goodsList/GoodsList";
// import BackTop from "components/content/backTop/BackTop";

import DetailNavBar from "./childdetail/DetailNavbar";
import DetailSwiper from "./childdetail/DetaiSwiper";
import DetailBaseInfo from "./childdetail/DetailBaseInfo";
import DetailShopInfo from "./childdetail/DetailShopInfo";
import DetailGoodsInfo from "./childdetail/DetailGoodsInfo";
import DetailParamsInfo from "./childdetail/DetailParamsInfo";
import DetailCommentInfo from "./childdetail/DetailCommentInfo";
import DetailBottomNavBar from "./childdetail/DetailBottomNavBar";
import DetailSku from "./childdetail/DetailSku";

import {
  getDetail,
  GoodsInfo,
  Shop,
  Params,
  getRecommend,
  ColorV,
  SizeV,
  TreeColorV,
  TreeSizeV,
  ListSku,
  Sku,
  GoodsPicture,
  Skued,
  GoodsImgInfo,
} from "network/detail.js";
import { debounce } from "common/tools/tools.js";
import { mixin, backTopMixin } from "common/tools/mixin.js";
import { mapActions } from "vuex";
import { Toast } from "vant";

import skuData from "./childdetail/data2";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      detailparaminfo: {},
      detailComment: {},
      recommendInfo: [],
      titleTopY: [],
      getTitleTop: null,
      currentIndex: 0,
      //isShow:false,
      isSku: false,
      goodsSpec: [],
      goodCategory: [],
      sku: {},
      goodsPicture: {},
      skuData: skuData,
      skudetail: {},
    };
  },
  components: {
    // Scroll,
    // GoodsList,
    //BackTop,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomNavBar,
    DetailSku,
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res.result);
      const data = res.result;
      //轮播图
      this.topImages = data.itemInfo.topImages;
      //商品基本信息
      this.goods = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //店铺信息
      this.shop = new Shop(data.shopInfo);

      //商品明细
      this.detailInfo = data.detailInfo;

      //商品参数
      this.detailparaminfo = new Params(
        data.itemParams.info,
        data.itemParams.rule
      );

      //评论
      if (data.rate.cRate !== 0) {
        this.detailComment = data.rate.list[0];
      }

      //商品规格
      this.goodCategory = data.skuInfo.props;
      this.goodsSpec = data.skuInfo.skus;
      const priceRange = data.skuInfo.priceRange;
      const totalStock = data.skuInfo.totalStock;
      const imgurl = data.itemInfo.topImages[0];

      this.skudetail = {
        goodCategory: this.goodCategory,
        goodsSpec: this.goodsSpec,
        priceRange: priceRange,
        totalStock: totalStock,
        imgurl: imgurl,
        title :this.goods.title,
        desc:this.goods.desc,
      };
  
    });

    //请求推荐数据
    getRecommend().then((res) => {
      this.recommendInfo = res.data.list;
      // console.log(this.recommendInfo)
    });

    this.getTitleTop = debounce(() => {
      this.titleTopY = [];
      this.titleTopY.push(0);
      this.titleTopY.push(this.$refs.paraminfo.$el.offsetTop);
      this.titleTopY.push(this.$refs.commentinfo.$el.offsetTop);
      //this.titleTopY.push(this.$refs.goodslist.$el.offsetTop);
      this.titleTopY.push(this.$refs.goodslist.offsetTop);
      this.titleTopY.push(Number.MAX_VALUE);
      console.log(this.titleTopY);
    }, 100);

    // let item ={name:"123",count:1};
    // let product =  item;
    // product.count += 1;
    // console.log(item);
    // console.log(product);
  },
  mixins: [mixin, backTopMixin],
  mounted() {},
  destroyed() {
    this.$bus.$off("imgload", this.itemimgload);
  },
  methods: {
    ...mapActions(["ADDCART"]),
    imageload() {
      //console.log("11111111111");
      this.refreshFun();
      this.getTitleTop();
    },
    paramImgload() {
      this.refreshFun();
    },
    swiperimg() {
      this.refreshFun();
    },
    baseimgload() {
      this.refreshFun();
    },
    shopimgload() {
      this.refreshFun();
    },
    commentimgload() {
      this.refreshFun();
    },
    navBarClick(index) {
      this.$refs.scroll.scrollBack(0, -this.titleTopY[index], 300);
    },
    contentscroll(postiton) {
      const postitony = -postiton.y;
      const length = this.titleTopY.length;
      for (let keys = 0; keys < length - 1; keys++) {
        if (this.currentIndex !== keys) {
          if (keys < length - 1) {
            if (
              postitony >= this.titleTopY[keys] &&
              postitony < this.titleTopY[keys + 1]
            ) {
              this.currentIndex = keys;
              this.$refs.navbar.currentIndex = this.currentIndex;
            }
          }
        }
      }
      this.isShow = -postiton.y > 1000;
    },
    addCart() {
       this.isSku = true;


      // const product = {};
      // product.title = this.goods.title;
      // product.desc = this.goods.desc;
      // product.image = this.topImages[0];
      // product.price = this.goods.lowNowPrice;
      // product.iid = this.iid;
      // product.count = 1;
      // product.checked = true;

      // //this.$store.commit('ADDCART', product);
      // // this.$store.dispatch('ADDCART', product).then( res => {
      // //   console.log(res)
      // // });

      // this.ADDCART(product).then((res) => {
      //   Toast.success(res);
      //});
    },
    // backClick(){
    //   this.$refs.scroll.scrollBack(0, 0, 300);
    // }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px);
}

.nav-var {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.recomment {
  text-align: center;
  /* margin-top: 20px; */
  font-size: 20px;
  font-weight: 400;
  height: 40px;
  line-height: 40px;
}
</style>

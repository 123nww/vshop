<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <silder-bar :category-list="categoryList" @slideBarItemClick="slideBarItemClick"></silder-bar>

    <scroll class="scroll-height" :typeNum="3" ref="scroll" @contentscroll="contentScroll">
      <sub-category :subcategoryList="subcategoryList" @subImgLoad="subImgLoad"></sub-category>
      <tab-contro :titles="titleList" @tabClick="tabClick" :tabIndex="tabIndex"></tab-contro>
      <goods-list :goodslist="categoryDetailList"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import SilderBar from "./childCategory/SilderBar";

import Scroll from "components/common/scroll/Scroll";
import SubCategory from "./childCategory/SubCategory";
import TabContro from "components/content/TabContro";
import GoodsList from "components/content/goodsList/GoodsList";

import { mixin,backTopMixin } from "common/tools/mixin";
import { debounce } from "common/tools/tools.js";
import {
  getCategoryList,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

export default {
  name: "Category",
  components: {
    NavBar,
    SilderBar,
    Scroll,
    SubCategory,
    TabContro,
    GoodsList,
  },
  data() {
    return {
      categoryList: [],
      keyList: [],
      keyList2: [],
      dataList: [],
      dataList2: [],
      subcategoryList: [],
      categoryDetailList: [],
      currentMinwallkey: "10062603",
      currentIndex: 0,
      tabIndex: 0,
      titleList: ["流行", "新款", "精选"],
      list: [],
      isShow:false
    };
  },
  mixins: [mixin,backTopMixin],
  created() {
    this.categoryPriList();
  },
  mounted() {},
  methods: {
    categoryPriList() {
      getCategoryList().then((res) => {
        //console.log(res.data.category.list);
        this.categoryList = res.data.category.list;
        const length = this.categoryList.length;
        if (length > 0) {
          const cateItem = this.categoryList[0];
          this.subcategory(cateItem.maitKey, 0);
          this.categoryDetail(cateItem.miniWallkey, "pop", 0);
          this.categoryDetail(cateItem.miniWallkey, "new", 0);
          this.categoryDetail(cateItem.miniWallkey, "sell", 0);
          this.keyList.push(cateItem.miniWallkey);
          this.keyList2.push(cateItem.maitKey);
        }
      });
    },
    categoryDetail(key, type, index) {
      this.list = [];
      getCategoryDetail(key, type).then((res) => {
        this.list.push(res);
        this.dataList2[index] = this.list;
        if (this.dataList2.length > 1) {
          this.categoryDetailList = this.dataList2[index][this.tabIndex];
        } else {
          this.categoryDetailList = this.dataList2[0][0];
        }
        //console.log(this.categoryDetailList);
      });
    },
    subcategory(key, index) {
      getSubcategory(key).then((res) => {
        this.dataList[index] = res.data.list;
        if (this.dataList.length > 1) {
          this.subcategoryList = this.dataList[index];
        } else {
          this.subcategoryList = this.dataList[0];
        }
      });
    },
    slideBarItemClick(obj) {
      //console.log(obj)
      this.currentMinwallkey = obj.miniWallkey;
      this.currentIndex = obj.index;
      const maitkey = obj.maitKey;
      if (
        this.keyList.includes(this.currentMinwallkey) &&
        this.keyList2.includes(maitkey)
      ) {
        this.subcategoryList = this.dataList[this.currentIndex];
        this.categoryDetailList = this.dataList2[this.currentIndex][this.currentIndex];
      } else {
        this.keyList[this.currentIndex] = this.currentMinwallkey;
        this.keyList2[this.currentIndex] = maitkey;
        this.subcategory(maitkey, this.currentIndex);
        this.categoryDetail(this.currentMinwallkey, "pop", this.currentIndex);
        this.categoryDetail(this.currentMinwallkey, "new", this.currentIndex);
        this.categoryDetail(this.currentMinwallkey, "sell", this.currentIndex);
      }
      this.$refs.scroll.scrollBack(0, 0, 300);
      this.tabIndex = 0;
    },
    tabClick(index) {
      this.categoryDetailList = this.dataList2[this.currentIndex][index];
    },
    subImgLoad() {
      this.refreshFun = debounce(this.$refs.scroll.refreshload, 300);
      this.refreshFun();
    },
    contentScroll(posititon){
      this.isShow = -posititon.y > 1000
    }
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-high-text);
  height: 44px;
  line-height: 44px;
  color: #fff;
}

.scroll-height {
  position: absolute;
  left: 100px;
  top: 44px;
  bottom: 49px;
  right: 0;
  overflow: hidden;
}
</style>

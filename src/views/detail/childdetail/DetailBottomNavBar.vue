<template>
  <div id="botnavbar">
    <div id="detail-bottom-nav-bar">
      <div class="bot-bar-item">
        <p>
          <img src="~assets/img/detail/icon01.png" alt />
        </p>
        <p>客服</p>
      </div>
      <div class="bot-bar-item">
        <p>
          <img src="~assets/img/detail/icon02.png" alt />
        </p>
        <p>店铺</p>
      </div>
      <div class="bot-bar-item">
        <p>
          <img src="~assets/img/detail/icon03.png" alt />
        </p>
        <p>收藏</p>
      </div>
      <div class="btn cart-btn" @click="addCart">加入购购物车</div>
      <div class="btn buy-btn">购买</div>
    </div>
    <!-- <van-sku
      v-model="isShow"
      :sku="skuData.sku"
      :goods="skuData.goods"
      :goods-id="iid"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="false"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />-->
    <!-- <van-sku
      v-model="isShow"
      :sku="skued"
      :goods="goodsPictured"
      :goods-id="iid"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="false"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />-->
    <van-sku
      v-model="isShow"
      :sku="sku"
      :goods="goodsPicture"
      :goods-id="iid"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="false"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import {
  ColorV,
  SizeV,
  TreeColorV,
  TreeSizeV,
  ListSku,
  Sku,
  GoodsPicture,
} from "network/detail.js";

import { mapActions } from "vuex";

export default {
  name: "DetailBottomNavBar",
  props: {
    skuData: {
      type: Object,
      default() {
        return {};
      },
    },

    skued: {
      type: Object,
      default() {
        return {};
      },
    },
    goodsPictured: {
      type: Object,
      default() {
        return {};
      },
    },
    iid: {
      type: String,
      default: null,
    },
    skudetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      //skuData: skuData,
      isShow: false,
      quota: 3,
      quotaUsed: 0,
      sku: {
        tree: [
          {
            k: "颜色",
            k_id: "1",
            v: [{ id: 1, name: "上衣+裤子" }],
            k_s: "s1",
            count: 1,
          },
          {
            k: "尺寸",
            k_id: 2,
            v: [
              { id: 100, name: "S" },
              { id: 101, name: "M" },
              { id: 102, name: "L" },
              { id: 103, name: "XL" },
            ],
            k_s: "s2",
            count: 4,
          },
        ],
        list: [
          { id: "116mzbxa", price: 10900, s1: 1, s2: 100, stock_num: 673 },
          { id: "116mzbx6", price: 10900, s1: 1, s2: 101, stock_num: 528 },
          { id: "116mzbx8", price: 10900, s1: 1, s2: 102, stock_num: 654 },
          { id: "116mzbxc", price: 10900, s1: 1, s2: 103, stock_num: 790 },
        ],
        price: "109.00",
        stock_num: 2645,
        none_sku: false,
        hide_stock: false,
      },
      goodsPicture: {
        picture:
          "//s5.mogucdn.com/mlcdn/c45406/180624_6jb1g4kg6i1ab4i4g0echaia49i87_640x960.png",
      },
      style: [],
    };
  },
  methods: {
    ...mapActions(["ADDCART"]),
    addCart() {
      this.$emit("addCart");
      this.isShow = true;
      // const goodsColor = [];
      // const goodsSize = [];
      // const cateGoryLength = this.skudetail.goodCategory.length;
      // if (cateGoryLength === 2) {
      //   let element = this.skudetail.goodCategory[0].list;
      //   for (const item of element) {
      //     const imgArr = [];
      //     for (const key of this.skudetail.goodsSpec) {
      //       if (item.styleId === key.styleId) {
      //         imgArr.push(key.img);
      //       }
      //     }
      //     var colorV = {
      //       id: item.styleId,
      //       name: item.name,
      //       imgUrl: imgArr.shift(),
      //     };
      //     goodsColor.push(colorV);
      //   }

      //   let element2 = this.skudetail.goodCategory[1].list;
      //   for (const item of element2) {
      //     const sizeV = {
      //       id: item.sizeId,
      //       name: item.name,
      //     };
      //     goodsSize.push(sizeV);
      //   }
      // }

      // const treeColorV = {
      //   k: "颜色",
      //   k_id: "1",
      //   v: goodsColor,
      //   k_s: "s1",
      //   count: goodsColor.length,
      // };

      // const treeSizeV = {
      //   k: "尺寸",
      //   k_id: "2",
      //   v: goodsSize,
      //   k_s: "s2",
      //   count: goodsSize.length,
      // };

      // const tree = [];
      // tree.push(treeColorV);
      // tree.push(treeSizeV);

      // let list = [];
      // for (const item of this.skudetail.goodsSpec) {
      //   //const listSku = new ListSku(item);
      //   const listSku = {
      //     id: item.xdSkuId,
      //     price: item.nowprice,
      //     s1: item.styleId,
      //     s2: item.sizeId,
      //     stock_num: item.stock,
      //   };
      //   list.push(listSku);
      // }
      // const nonPrice = this.skudetail.priceRange;
      // const nonPricestr = nonPrice.replace("¥","");
      // const skued = {
      //   tree: tree,
      //   list: list,
      //   price: nonPricestr,
      //   stock_num: this.skudetail.totalStock,
      //   none_sku: false,
      //   hide_stock: false,
      // };

      // const goodsImgInfo = {
      //   picture: this.skudetail.imgurl,
      // };
      // this.sku = skued;
      // this.goodsPicture = goodsImgInfo;

      let tree = [];
      let goodsColor = [];
      let goodsSize = [];
      let list = [];
      const cateGoryLength = this.skudetail.goodCategory.length;
      if (cateGoryLength === 2) {
        let element = this.skudetail.goodCategory[0].list;
        for (const item of element) {
          const imgArr = [];
          for (const key of this.skudetail.goodsSpec) {
            if (item.styleId === key.styleId) {
              imgArr.push(key.img);
            }
          }
          const colorV = new ColorV(item);
          colorV.imgUrl = imgArr.shift();
          goodsColor.push(colorV);
        }
        let element2 = this.skudetail.goodCategory[1].list;
        for (const item of element2) {
          const sizeV = new SizeV(item);
          goodsSize.push(sizeV);
        }
      }
      this.style = goodsColor;
      const treeColor = new TreeColorV(goodsColor);
      const treeSize = new TreeSizeV(goodsSize);
      tree.push(treeColor);
      tree.push(treeSize);
      let listlength = this.skudetail.goodsSpec.length;
      for (const item of this.skudetail.goodsSpec) {
        const listSku = new ListSku(item);
        list.push(listSku);
      }
      const skued = new Sku(
        tree,
        list,
        this.skudetail.priceRange,
        this.skudetail.totalStock
      );
      const goodsimg = new GoodsPicture(this.skudetail.imgurl, this.iid);
      this.sku = skued;
      this.goodsPicture = goodsimg;
    },
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },

    onAddCartClicked(data) {
      //console.log(data);
      //this.$toast("add cart:" + JSON.stringify(data));
      const product = {};
      product.title = this.skudetail.title;
      product.desc = this.skudetail.desc;
      let image = null;
      for (const item of this.style) {
        if (item.id === data.selectedSkuComb.s1) {
          image = item.imgUrl;
        }
      }
      product.image = image;
      product.price = data.selectedSkuComb.price / 100;
      product.iid = this.iid;
      product.count = data.selectedNum;
      product.checked = true;
      this.ADDCART(product).then((res) => {
        this.$toast.success(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
#detail-bottom-nav-bar {
  height: 49px;
  background-color: #fff;

  // position: fixed;
  // left: 0;
  // right: 0;
  // bottom: 0;

  position: relative;

  display: flex;
  text-align: center;
  .bot-bar-item {
    width: 16%;
    font-size: 12px;
    color: #333;
    text-align: center;
    img {
      width: 22px;
      height: 22px;
      margin: 4px 0;
      vertical-align: middle;
    }
  }
  .btn {
    width: 26%;
    font-size: 13px;
    line-height: 49px;
    text-align: center;
  }
  .cart-btn {
    background-color: #f9cd0b;
    line-height: 49px;
  }
  .buy-btn {
    color: #fff;
    background-color: var(--color-high-text);
  }
}
</style>

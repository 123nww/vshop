<template>
  <div id="detailshopinfo" v-if="Object.keys(shop).length !== 0">
    <div class="shop-logo">
      <img :src="shop.shopLogo" alt class="shop-logo-img" @load="shopimgload"/>
      <span>{{shop.name}}</span>
    </div>
    <div class="flex shop-info">
      <div class="flex shop-sell shop-goods">
        <div>
          <p class="p16">{{shop.cSells|saveNum}}</p>
          <p>总销量</p>
        </div>
        <div>
          <p class="p16">{{shop.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-goods shop-right">
        <div class="shop-score" v-for="item in shop.score">
          {{item.name}}&ensp;
          <span
            class="shop-score-item"
            :class="{active:item.isBetter}"
          >{{item.score}}</span>
          <span class="shop-score-bg" :class="{active:item.isBetter}">{{item.isBetter ? '低' : '高'}}</span>
        </div>
      </div>
    </div>
    <div class="enter-shop-wrap">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      typr: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  filters: {
    saveNum(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  },
  methods:{
    shopimgload(){
      this.$emit("shopimgload")
    }
  }
};
</script>

<style lang="less" scoped>
.shop-logo {
  align-items: center;
  margin: 20px 10px;
  .shop-logo-img {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    vertical-align: middle;
  }
}

.shop-info {
  font-size: 12px;
  align-items: center;
  line-height: 22px;
  .shop-goods {
    flex: 1;
  }
  .shop-sell {
    border-right: 1px solid #ececec;
    div {
      flex: 1;
      text-align: center;
    }
  }
  .shop-right {
    padding-left: 40px;
    .shop-score-item {
      display: inline-block;
      width: 30px;
      color: #006666;
      &.active {
        color: #880000;
      }
    }
    .shop-score-bg {
      background-color: #006666;
      color: #fff;
      padding: 1px 4px;
      font-size: 12px;
      &.active {
        background-color: #880000;
      }
    }
  }
}

.p16 {
  font-size: 16px;
}

.enter-shop-wrap {
  text-align: center;
  .enter-shop {
    display: inline-block;
    background-color: #f2f2f2;
    font-size: 12px;
    padding: 6px 30px;
    border-radius: 100px;
    margin: 10px;
  }
}
</style>

<template>
  <div id="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="tilte">{{goods.title}}</div>
    <div class="price-wrap">
      <span class="new-price">{{goods.lowNowPrice}}</span>
      <span class="new-oldprice">{{goods.oldPrice}}</span>
      <span class="new-disdesc" v-if="goods.discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div class="other-info">
      <div class="info">{{goods.columns[0]}}</div>
      <div class="info">{{goods.columns[1]}}</div>
      <div class="info">{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="serves-wrap">
      <span v-for="index in goods.services.length-1" :key="index" class="serves-wrap-item">
        <img :src="goods.services[index-1].icon" alt @load="baseimgload" />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      trpe: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods:{
    baseimgload(){
      this.$emit('baseimgload')
    }
  }
};
</script>

<style  lang="less" scoped>
.tilte {
  margin: 10px 0;
  padding: 0 4px;
  font-size: 14px;
  line-height: 20px;
}

.price-wrap {
  display: flex;
  padding: 0 4px 10px;
  .new-price {
    color: var(--color-text);
  }
  .new-oldprice {
    color: #999;
    font-size: 12px;
    margin: 0 4px;
    text-decoration: line-through;
  }
  .new-disdesc {
    color: #fff;
    font-size: 12px;
    border-radius: 100px;
    padding: 2px 6px;
    background-color: var(--color-high-text);
  }
}
.other-info {
  display: flex;
  color: #999;
  font-size: 12px;
  padding: 10px 4px;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;
}
.info {
  flex: 1;
}
.serves-wrap {
  display: flex;
  font-size: 12px;
  color: #333;
  justify-content: space-between;
  padding: 10px 4px;
  border-bottom: 4px solid #ededed;
}

// .serves-wrap-item {
//   flex: 1;
// }

.serves-wrap-item img {
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
</style>

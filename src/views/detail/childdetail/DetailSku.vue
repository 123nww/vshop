<template>
  <!-- 基础用法 -->
  <div class="sku-container">
    <van-sku
      v-model="isShow"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :quota="skuData.quota"
      :quota-used="skuData.quota_used"
      :hide-stock="skuData.sku.hide_stock"
      :close-on-click-overlay="closeOnClickOverlay"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />

    <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" @closed=""/> -->

    <!-- <van-sku
    v-model="showBase"
    :sku="skuData.sku"
    :goods="skuData.goods_info"
    :goods-id="skuData.goods_id"
    :hide-stock="skuData.sku.hide_stock"
    :quota="skuData.quota"
    :quota-used="skuData.quota_used"
    :initial-sku="initialSku" //默认选中
    reset-stepper-on-hide
    reset-selected-sku-on-hide
    disable-stepper-input
    :close-on-click-overlay="closeOnClickOverlay"
    :custom-sku-validator="customSkuValidator"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked"
    />
    <van-button block type="primary" @click="showBase = true">xxxx</van-button>-->
  </div>
</template>

<script>
import skuData from "./data";
export default {
  name: "DetailSku",
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      show: true,
      skuData: skuData,
      showBase: true,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      // closeOnClickOverlay: true,
      initialSku: {
        s1: "30349",
        s2: "1193",
        selectedNum: 3,
      },
      customSkuValidator: () => "请选择xxx!",
    };
  },
  computed:{
    showed:{
      get(){
        return this.isShow
      },
      set(){

      }
    },
    closeOnClickOverlay(){
      console.log("遮罩层")
      return true
    }
  },
  methods: {
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },

    onAddCartClicked(data) {
      this.$toast("add cart:" + JSON.stringify(data));
    }
  },
};
</script>

<style lang="less">
.sku-container {
  padding: 0 15px;
}
</style>
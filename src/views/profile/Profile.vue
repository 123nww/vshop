<template>
  <div id="profile">
    <!-- <fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" ref="generateForm">
      
    </fm-generate-form>-->
    <!-- <el-button type="primary" @click="handleSubmit">提交</el-button> -->
    <!-- <detail-sku :isShow="isShow" class="detailSKu"></detail-sku> -->

    <van-sku
      v-model="isShow"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :quota="skuData.quota"
      :quota-used="skuData.quota_used"
      :hide-stock="skuData.sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <van-button type="info" @click="itemclick" >展示商品属性</van-button>
    <!-- <detail-bottom ></detail-bottom> -->
  </div>
</template>

<script>
import DetailSku from "../detail/childdetail/DetailSku";
import skuData from "./data";

import DetailBottom from "../detail/childdetail/DetailBottomNavBar";

export default {
  name: "Profiled",
  components: {
    DetailSku,
    DetailBottom
  },
  data() {
    return {
      isShow: false,
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
  methods: {
    handleSubmit() {
      //   this.$refs.generateForm.getData().then(data => {
      //     // data check success
      //     // data - form data
      //     console.log(data)
      //   }).catch(e => {
      //     // data check failed
      //   })
    },
    skuDetail() {
      //  this.isShow = !this.isShow
      this.isShow = true;
      // setTimeout(()=>{
      //   this.isShow = false
      // },2000)
    },
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },

    onAddCartClicked(data) {
      this.$toast("add cart:" + JSON.stringify(data));
    },
    itemclick() {
      // if(this.item.item_id){
      //   console.log("item_id:"+this.item.item_id)
      //   this.$router.push("/detail/" + this.item.item_id)
      // }

      if(this.item.iid){
        this.$router.push("/detail/" + this.item.iid)
      }
        
    }
  },
};
</script>

<template>
  <!--  -->
  <div class="swipercell">
  <van-swipe-cell :stop-propagation="true" >
    <div id="cart-list-item" class="cart-list-main flex">
      <div class="cart-list-left flex" @click="isChecked">
        <!-- <input type="checkbox" class="check" v-model="cartItem.checked" @click="isChecked"/> -->
        <!-- <van-checkbox @change="cartItem.checked" class="check"  @click="checked" checked-color="#ff5777"> </van-checkbox> -->
        <van-checkbox
          v-model="cartItem.checked"
          ref="checkboxes"
          class="check"
          checked-color="#ff5777"
        />
        <img :src="cartItem.image" alt class="goods-img" />
      </div>
      <div class="cart-list-right">
        <div class="goods-name one-txt-cut">{{cartItem.title}}</div>
        <div class="goods-info flex">
          <span class="price">￥{{cartItem.price}}</span>
          <span>x{{cartItem.count}}</span>
        </div>
      </div>
    </div>
    <template #right >
      <van-button square type="danger" class="buttonRight" text="删除" @click="swiprClick" />
      <!-- <van-button square type="primary" class="buttonRight" text="收藏" /> -->
    </template>
  </van-swipe-cell>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "CartListItem",
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(['DELETECARTlIST']),
    imgload() {
      this.$emit("cartImgload");
    },
    isChecked() {
      //this.cartItem.checked = !this.cartItem.checked
      this.$refs.checkboxes.toggle();
      this.$store.dispatch("CHANGECHECKED", this.cartItem);
    },
    swiprClick(){
      console.log("click");
      this.DELETECARTlIST(this.cartItem);
    },
  },
};
</script>

<style lang="less" scoped>
.cart-list-main {
  padding: 10px;
  border-bottom: 1px solid #ececec;
}
.cart-list-left {
  width: 26%;
  align-items: center;
  .check {
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 100%;
    border: 1px solid #ececec;
  }
  // .check:checked {
  //   background: url(~assets/img/detail/check_active.png) no-repeat center;
  //   background-size: cover;
  // }
  .goods-img {
    width: 52px;
    height: 66px;
    overflow: hidden;
    border: 1px solid #ececec;
    margin: 0 10px;
    border-radius: 6px;
    vertical-align: middle;
  }
}
.cart-list-right {
  width: 74%;
  position: relative;
  .goods-name {
    width: 100%;
    font-size: 13px;
  }
  .goods-info {
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    .price {
      color: #f9cd0b;
    }
  }
}

// .swipercell{
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

.buttonRight{
  //margin-top: 20px;
  height: 89px;
  line-height: 89px;
}
</style>
